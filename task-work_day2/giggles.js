var giggles = "yes yes yes";
var count = 0;

console.log("Are you still giggling?");
console.log(giggles);

var words = giggles.split(" ");  
var i = 0;

while (i < words.length) {
    if (words[i] === "yes") {
        count++;
    }
    i++;
}

console.log(`That's ${count} giggles. You're hilarious!`);



