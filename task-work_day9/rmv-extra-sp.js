let sent = "hello  world   javascript";
let newSent = "";

for (let ch of sent) {
    if (ch != ' ') {
        newSent += ch;
        prevSpace = false;
    } 
    else if (!prevSpace) {
        newSent += ' ';
        prevSpace = true;
    }
}

console.log(newSent.trim());

