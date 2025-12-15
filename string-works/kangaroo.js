let word1 = "observe";
let word2 = "serve";
let isKangaroo = true;

for (let ch of word2) {

    let count1 = 0;
    let count2 = 0;

    // count ch in word1
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] === ch) {
            count1++;
        }
    }

    // count ch in word2
    for (let i = 0; i < word2.length; i++) {
        if (word2[i] === ch) {
            count2++;
        }
    }

    // if word2 uses ch more times than word1
    if (count2 > count1) {
        isKangaroo = false;
        break;
    }
}

console.log(isKangaroo);
