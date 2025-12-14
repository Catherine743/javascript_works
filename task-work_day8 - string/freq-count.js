let word = "malayalam";

for (let i = 0; i < word.length; i++) {
    let count = 0;
    let ch = word[i];

    // skip already counted characters
    let alreadyCounted = false;
    for (let k = 0; k < i; k++) {
        if (word[k] === ch) {
            alreadyCounted = true;
            break;
        }
    }

    if (alreadyCounted) continue;

    // count frequency
    for (let j = 0; j < word.length; j++) {
        if (word[j] === ch) {
            count++;
        }
    }

    console.log(`${ch} -> ${count}`);
}

