function vowCount(word){
    count = 0;
    for(let ch of word){
        if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
            count++;
        }
    }
    return `No of vowels in the word ${word} is ${count}`;
}

console.log(vowCount("javascript"));