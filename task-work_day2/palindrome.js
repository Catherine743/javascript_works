var word = "malayalam";

console.log("Enter a word");
console.log(`${word}`);

if (word == word.split("").reverse().join("")){
    console.log("Palindrome found!");
    
}
else{
    console.log("Try again");
    
}

