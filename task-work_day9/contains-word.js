text = "JavaScript is Easy to Learn";
text = text.toLowerCase();

word = "javascript";
word = word.toLowerCase();

words = "";

found = false;
for (i = 0; i < text.length; i++) {
    match = true;

    for (j = 0; j < word.length; j++) {
        if (text[i + j] != word[j]) {
            match = false;
            break;
        }
        words = words + text[i+j];
    }

    if (match) {
        found = true;
        break;
    }
}

if (found) {
    console.log(`The string contains the word "${words}"`);
} 
else {
    console.log("The string does not contain the word");
}
