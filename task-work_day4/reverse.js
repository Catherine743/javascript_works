text = "JAVASCRIPT";
rev = "";

for(let ch of text){
     rev = ch + rev;
        
}

// for(let i = text.length; i >= 0; i--){
//     rev = rev + text[i];
// }

console.log(`Reverse of the string ${text} is ${rev}`);
