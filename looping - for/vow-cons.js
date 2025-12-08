var vCount = 0;
var cCount = 0;
var text = "Hello Javascript";
text = text.toLowerCase();

for(let ch of text){
    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
        vCount++;
    }
    else if(ch != ' '){
        cCount++;
    }
}

console.log(`No of vowels and consonants in ${text} is ${vCount} and ${cCount}`);
