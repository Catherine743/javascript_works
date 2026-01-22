word = "banana";
reverse = "";

for(let ch of word){
    reverse =  ch + reverse;
}

console.log(word == reverse? "Palindrome" : "Not palindrome");

