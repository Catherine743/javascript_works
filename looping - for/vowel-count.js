var text = "HelloWorld";
text.toLowerCase()
var count = 0;

for(let ch of text){
    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
        count++;
    }
}

console.log(`No of vowels in text ${text} is ${count}`);
