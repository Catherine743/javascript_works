let text = "hello javascript ";
let word = "t";
text = text.trim();
let lastWord = "";   // declare outside

if (word.length == 1) {
    let lastChar = text.at(-1);

    if (lastChar === word) {
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


