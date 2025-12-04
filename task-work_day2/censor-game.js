var sent = "You are amazing!";


console.log("Enter a sentence:");
console.log(`${sent}`);

var cleaned = sent.replace(/[^a-zA-Z ]/g, "");
var words = cleaned.split(" ");
var i = 0;

while (i < words.length) {
    if (words[i] == "dumb" || words[i] == "stupid") {
        console.log("Please be polite!");

    }
    i++;
}

console.log("Enter a sentence:");
