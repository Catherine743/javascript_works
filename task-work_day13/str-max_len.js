let arr = ["umbrella", "pen", "pencil", "paper"];
let max = "";

for (let word of arr) {
    if (word.length > max.length) {
        max = word;
    }
}

console.log(`Maximum length string is ${max}`);

