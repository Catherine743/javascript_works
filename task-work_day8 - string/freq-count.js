word = "malayalam";

for (i = 0; i < word.length; i++) {
    count = 0;
    ch = word[i];

    alreadyCounted = false;
    for (k = 0; k < i; k++) {
        if (word[k] === ch) {
            alreadyCounted = true;
            break;
        }
    }

    if (alreadyCounted) continue;

    for (let j = 0; j < word.length; j++) {
        if (word[j] === ch) {
            count++;
        }
    }

    console.log(`${ch} -> ${count}`);
}

