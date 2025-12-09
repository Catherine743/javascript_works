n = 5;
for(r = 1; r <= n; r++){
    pattern = "";
    for(c = 1; c <= n; c++){
        if (r == 1 || r == n || c == 1 || c == n){
            pattern = pattern + "1\t"
        }
        else{
            pattern = pattern + "0\t"
        }
    }
    console.log(pattern);
    
}