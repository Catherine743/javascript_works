sent = "Hello World";
count = 0;

for(let ch of sent){
    if(ch == ' '){
        count++;
    }
    ch++;
}
count = count + 1;

console.log(`No. of words in the sentence is ${count}`);
