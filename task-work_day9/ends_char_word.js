let text = "hello javascript ";
word = "javascript"

text = text.trim();

let lastChar = text.at(-1);
console.log("Last character ->", lastChar);

let lastWord = "";
for (let i = text.length - 1; i >= 0; i--) {
    if (text[i] == " ") {
        lastWord = text.substring(i + 1);
        break;
    }
}

if (lastWord == "") {
    lastWord = text;
}

console.log("Last word ->", lastWord);

