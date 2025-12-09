var text = "amanaplanacana";
var result = ""

for(i = text.length; i >= 0; i--){
    result = result + text[i];

}

console.log(result == text? "Palindrome" : "Not palindrome ");

