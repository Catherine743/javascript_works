for(r = 1; r <= 4; r++){
    pattern = "";
    for(c = 1; c <= 4; c++){
        if(c <= r){
            pattern = pattern + "1\t"
        }
        else{
            pattern = pattern + "0\t"
        }
    }
    console.log(pattern);
    
}