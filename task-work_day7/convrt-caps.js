function caps(word){
    capsWord = ""
    for(i = 0; i < word.length; i++){
        if(i == 0){
            capsWord = capsWord + word[i].toUpperCase();
        }
        else if (word[i] == ' '){
            capsWord = capsWord + word[i];
            capsWord = capsWord + " " + word[i+1].toUpperCase();
            i++;
        }
        else{
            capsWord = capsWord + word[i]
        }
    }
    return capsWord
}

console.log(caps("hello world"));
