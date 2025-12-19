let arr = ["umbrella", "pen", "pencil", "paper"];
let max = "";

for (let word of arr) {
    if (word.length > max.length) {
        max = word;
    }
}

console.log(`Maximum length of the string is ${max}`);

