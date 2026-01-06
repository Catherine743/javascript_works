word = "malayalam";
reverse = "";

for(let ch of word){
    reverse = reverse + ch;
}

console.log(word == reverse? "Palindrome" : "Not palindrome");

