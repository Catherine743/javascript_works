let text = "hello javascript ";

// remove trailing spaces
text = text.trim();

// LAST CHARACTER
let lastChar = text.at(-1);
console.log("Last character ->", lastChar);

// LAST WORD
let lastWord = "";
for (let i = text.length - 1; i >= 0; i--) {
    if (text[i] == " ") {
        lastWord = text.substring(i + 1);
        break;
    }
}

// if there is only one word
if (lastWord == "") {
    lastWord = text;
}

console.log("Last word ->", lastWord);

