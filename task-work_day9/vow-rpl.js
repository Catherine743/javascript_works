text = "Hello Javascript";
word = text.toLowerCase();
words = "";
for(let ch of word){
    if( ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
        ch = "*";
        words = words + ch;
    }
    else{
        words = words + ch;
    }
}

console.log(words);
