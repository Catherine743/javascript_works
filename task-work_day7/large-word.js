function largestWord(sent) {

    words = [];
    word = "";
    wIndex = 0;

    for (i = 0; i < sent.length; i++) {

        if (sent[i] !== " ") {
            word = word + sent[i];
        }
        else {
            words[wIndex] = word;
            wIndex++;
            word = "";
        }
    }

    words[wIndex] = word;
    largestWord = words[0];

    for (i = 1; i <= wIndex; i++) {
        if (words[i].length > largestWord.length) {
            largestWord = words[i];
        }
    }
    return `${largestWord} is the largest word in the sentence`;

}

console.log(largestWord("I love programming"));
