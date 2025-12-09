sum = 0;

for(r = 1; r <= 3; r++){
    pattern = "";
    for(c = 1; c <= 3; c++){
        sum = r + c;
        pattern = pattern +`${r} + ${c} = ${sum}\t`;
    }
    console.log(pattern);
    
}