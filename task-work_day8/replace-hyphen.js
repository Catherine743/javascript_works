word = "Hello Javascript";
words = "";

for(let ch of word){
    if(ch == ' '){
        ch = "-"
    }
    words = words + ch;
}

console.log(words);
