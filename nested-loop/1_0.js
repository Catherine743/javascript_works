for (r = 1; r <= 4; r++){
    pattern = "";
    for(c = 1; c <= 4; c++){
        if(r == c || r + c == 5){
            pattern += "1\t";
        }
        else{
            pattern += "0\t";
        }
    }
    console.log(pattern);
    
}