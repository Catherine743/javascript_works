function isPangram(word){
    alphabets = "abcdefghijklmnopqrstuvwxyz";
    panagramWord = true;
    
    for(let ch of alphabets){
        if(word.indexOf(ch) == -1){
            panagramWord = false;
            break;
        }
    }
    
    return panagramWord
}

console.log(isPangram("the quick brown fox jumps over lazy dog"));

