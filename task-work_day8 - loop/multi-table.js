for(i = 1; i <= 10; i++){
    row = ""
    for(j = 1; j <= 5; j++){
        row = row + `${i} * ${j} = ${i*j}` + "\t\t";
        
    }
    console.log(row);
    
}