let sent = "sea seashore";
let word = "sea";
let count = 0;

for (let i = 0; i <= sent.length; i++) { // s,e,a," "
    let match = true; // match = true

    for (let j = 0; j < word.length; j++) { // s,e,a
        if (sent[i + j] != word[j]) { // (0+1) s != s => F, (0 + 1)e != e => F,(0 + 2) a != a => F, ->count-1
            match = false;            // (1+0) e != s =>T // (2+0) a != s => T // (3+0) != s => T // (4+0) s!= s => F, (4+1) e!= e =>F, (4+2) a != a => F -> count = 2
            break;
        }
    }

    if (match) {
        count++;
    }
}

console.log(`No of words in sent is ${count}`);






