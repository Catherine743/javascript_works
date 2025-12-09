for(r = 1; r <= 5; r++){
    pattern = "";
    for(c = 1; c <= 5; c++){
        if (r == 3 || c == 3){
            pattern = pattern + "1\t"
        }
        else{
            pattern = pattern + "0\t"
        }
    }
    console.log(pattern);
    
}