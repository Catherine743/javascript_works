function isPalindromeWord(word){
    isPWord = true;
    newWord = word.toLowerCase().replaceAll(" ","");
    reverse = "";
    for (let i = newWord.length - 1; i >= 0; i--){
        reverse = reverse + newWord[i]; 
    }
    
    return reverse == newWord
    
}

console.log(isPalindromeWord("A MAN A plan a canal panama"));

