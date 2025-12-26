var text = "this is a javascript program this javascript program is simple";

word = text.split(" ")
wordCount = {}

for (let w of word){
    if(w in wordCount){
        wordCount[w] += 1;
    }
    else{
        wordCount[w] = 1;
    }
}

console.log(wordCount);
