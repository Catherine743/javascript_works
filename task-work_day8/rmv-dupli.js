word = "maria";
words = ""

for (let ch of word) {
    isDuplicate = false;
    for (i = 0; i < words.length; i++) {
        if(ch == words[i]){
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate){
        words = words + ch;
    }
}

console.log(words);
