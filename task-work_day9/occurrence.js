let word = "javascript";
let checked = "";

for (let ch of word) {

    // skip if character already processed
    if (checked.includes(ch)) {
        continue;
    }

    let count = 0;
    let first = -1;
    let last = -1;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === ch) {
            if (first === -1) {
                first = i;   // first occurrence
            }
            last = i;        // last occurrence
            count++;
        }
    }

    // print ONLY if duplicate found
    if (count > 1) {
        console.log(
            ch,
            "→ First occurrence:", first,
            "Last occurrence:", last
        );
    }

    checked += ch; // mark character as processed
}
