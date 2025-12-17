let arr = [1, 2, 2, 3, 1];

let freq = [];
let count = [];
let freqArr = "";
j = 0;


for (let n of arr) {
    let found = false;

    for (let i = 0; i < freq.length; i++) {
        if (freq[i] === n) {
            count[i]++;
            found = true;
            break;
        }
    }

    if (!found) {
        freq[j] = n;
        count[j] = 1;
        j++; 
    }
}

for (let i = 0; i < freq.length; i++) {
    if (i > 0) {
        freqArr = freqArr + ", ";
    }
    freqArr = freqArr + freq[i] + " : " + count[i];
}

console.log(freqArr);

