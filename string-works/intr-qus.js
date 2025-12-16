word = "ABC123";
challengeCode = "7YZ";
words = ""
count = 1;

appendCode = word.concat(challengeCode);
console.log(appendCode);


for(i = 0; i < appendCode.length; i++){
    if(count == 3){                  // if(i + 1) % 3 == 0
        words = words + "X"; 
        count = 1;
    }
    else{
    words = words + appendCode[i];
    count++;
    }
}

console.log(words);

