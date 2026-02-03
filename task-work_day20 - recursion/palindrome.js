function palindrome(str){
    rev = "";
    for(i = str.length - 1; i >= 0; i--){
        rev += str[i]
    }
    if(str == rev){
        return "This string is palindrome"
    }
    else{
        return "This string is not palindrome"
    }
}

console.log(palindrome("malayalam"));
