word = "malayalam";
words = "";

for(let ch of word){
    isFound = false;
    for(i = 0; i < words.length; i++){
        if(ch == words[i]){
            console.log(`First repeated character in string ${word} is ${ch}`);
            isFound = true;
            break;
            
        }
    }
    if(isFound){
        break;
    }
    words = words + ch;
}