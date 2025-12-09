row = 4;
col = 4

for(r = 1; r <= row; r++){
    pattern = "";
    for(c = 1; c <= col; c++){
        if(r == 1 || c == 1 || r == row || c == col){
        pattern = pattern + "R\t"
        }
        else{
            pattern = pattern + "S\t"
        }
    }
    console.log(pattern);
    
}