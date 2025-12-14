word = "Hello Javascript";
text = word.toLowerCase();
vow = 0;
cons = 0;

for(let ch of text){
    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){       
        vow++;
    }
    else if(ch != ' '){
        cons++;
    }
}
console.log(`No. of vowels and consonants in word ${word} is ${vow} and ${cons}`);

