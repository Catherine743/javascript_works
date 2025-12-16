let sent = "sea seashore";
let word = "sea";
let count = 0;

for (let i = 0; i <= sent.length; i++) { // s,e,a," "
    let match = true; // match = true

    for (let j = 0; j < word.length; j++) { // s,e,a
        if (sent[i + j] != word[j]) { // (0+1s != s => F,e != e => F,a != a => F,
            match = false;
            break;
        }
    }

    if (match) {
        count++;
    }
}

console.log(count);






