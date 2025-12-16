let text = "JavaScript is Easy to Learn";
let word = "javascript";

text = text.toLowerCase();
word = word.toLowerCase();
words = "";

let found = false;

for (let i = 0; i <= text.length - word.length; i++) {
    let match = true;

    for (let j = 0; j < word.length; j++) {
        if (text[i + j] !== word[j]) {
            match = false;
            break;
        }
        words = words + word[j]
    }

    if (match) {
        found = true;
        break;
    }
}

if (found) {
    console.log(`The string contains the word ${words}`);
} else {
    console.log("The string does not contain the word");
}
