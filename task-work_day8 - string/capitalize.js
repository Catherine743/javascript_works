let word = "hello moto";
let words = "";

for (let i = 0; i < word.length; i++) {
    if (i === 0 || word[i - 1] === ' ') {
        words = words + word[i].toUpperCase();
    } else {
        words = words + word[i];
    }
}

console.log(words);
