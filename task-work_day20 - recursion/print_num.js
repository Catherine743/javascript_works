function num(n){
    if(n > 10){
        return;
    }
    console.log(n);
    return num(n + 1);
    
}

num(1);