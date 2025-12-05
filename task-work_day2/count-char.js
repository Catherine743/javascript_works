var word = "hello stop";
var total = 0;

console.log("Enter a word:");
console.log(`${word}`);

if (word != "stop") {
    total = total + word.length;
}

console.log(`Total number of characters entered (excluding "stop") is ${total}`);


