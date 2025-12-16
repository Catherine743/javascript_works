sent = "sea seashore sea";
word = "sea";
count = 0
used = "";

for(let ch of sent){
    for(i = 0; i < word.length; i++){
        if (ch == word[0]){
            used = used + word[0];
        }
    }
    if(used == word){
        count++;
    }
}


