let text = "Hello     JavaScript   world";
text = text.trim();                 // remove extra spaces

let words = text.split(/\s+/);      // split by one or more spaces
let count = words.length;

console.log("Number of words:", count);





















// let text = "Hello     javascript";
// let count = 0;

// for (let i = 0; i < text.length; i++) {
//     if (text[i] != ' ' && (i == 0 || text[i - 1] == ' ')) {
//         count++;
//     }
// }

// console.log(`No of words in "${text}" is ${count}`);






