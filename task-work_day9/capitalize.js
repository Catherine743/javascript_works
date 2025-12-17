word = "hello   javascript";
words = "";

for(i = 0; i < word.length; i++){
    if (i == 0){
        ch = word[i].toUpperCase()
        words = words + ch;
    }
    else if (word[i] == ' ' && word[i+1] != ' '){
        words = words + word[i];
        ch = word[i + 1].toUpperCase();
        words = words + ch;
        i++;
    }
    else{
    words = words + word[i]
    }
}

console.log(words);
