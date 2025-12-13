function uniqueWord(word){

    let unique = [];
    let index = 0;

    for (let i = 0; i < word.length; i++) {

        let found = false;

        // check if character already stored
        for (let j = 0; j < unique.length; j++) {
            if (word[i] === unique[j]) {
                found = true;
                break;
            }
        }

        // if not found, add it
        if (!found) {
            unique[index] = word[i];
            index++;
        }
    }

    return `Unique characters in the word ${word} is ${unique.join("")}`;
}

console.log(uniqueWord("hello"));

