for(r = 1; r <= 3; r++){
    pattern = "";
    for(c = 1; c <= 4; c++){
       if(c % 2 == 0){
        pattern = pattern + "E\t"; 
       }
       else{
        pattern = pattern + "O\t"
       }
    }
    console.log(pattern);
}