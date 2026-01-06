str = "hello Javascript ";
text = str.toLowerCase();

word = "javascript";
word = word.toLowerCase()

text = text.trim();
lastWord = "";   // declare outside

if (word.length == 1) {
    lastChar = text.at(-1);

    if (lastChar == word) {
        console.log("String ends with the character");
    } 
}
else {
    for (let i = text.length - 1; i >= 0; i--) {
        if (text[i] == " ") {
            lastWord = text.substring(i + 1);
            break;
        }
    }

    if (lastWord == "") {
        lastWord = text;
    }
    if (lastWord === word) {
        console.log("String ends with the word");
    } 
}

// let str = "hello Javascript";
// text = str.toLowerCase();
// word = "javascript"

// text = text.trim();

// let lastChar = text.at(-1);
// console.log("Last character ->", lastChar);

// let lastWord = "";
// for (let i = text.length - 1; i >= 0; i--) {
//     if (text[i] == " ") {
//         lastWord = text.substring(i + 1);
//         break;
//     }
// }


// if (lastWord == "") {
//     lastWord = text;
// }

// console.log("Last word ->", lastWord);



