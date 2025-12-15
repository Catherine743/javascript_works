function isPalindrome(text){
    isPWord = true;
    reverse = ""; 
    for(i = text.length - 1; i >= 0; i--){
        reverse = reverse + text[i];
    }
    if(text != reverse){
        isPWord = false;
    }
    return isPWord;
}

console.log(isPalindrome("malayalam"));
