let sent = "sea seashore sea";
let words = sent.trim().split(" ");
let count = {};

for (let w of words) {
    for (let i = 0; i < w.length; i++) {
        for (let j = i + 1; j <= w.length; j++) {
            let sub = w.slice(i, j);
            if (count[sub] == undefined) {
                count[sub] = 1;
            } else {
                count[sub]++;
            }
        }
    }
}

console.log(count["sea"]); 
