text = "hello javascript";

for(i = 0; i <= text.length; i++){
    if (text.at(-1) == text[i]){
        lastWord = text.at(i);  
        console.log("Last word -> ",lastWord);
        
    }
    else if( text[i] == ' '){
        lastChar = text.substring(i+1,);
        console.log("Last Character -> ",lastChar);
        
    }
}