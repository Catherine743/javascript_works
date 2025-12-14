let words = "hello world";
let result = "";
let temp = "";

for (let i = 0; i < words.length; i++) {
    if (words[i] !== ' ') {
        temp = words[i] + temp;   // reverse current word
    } else {
        result = result + temp + " ";
        temp = "";
    }
}

// add last word
result = result + temp;

console.log(result);




