function num(n){
    if(n < 1){
        return;
    }
    console.log(n);
    return num(n - 1);
    
}

num(10);