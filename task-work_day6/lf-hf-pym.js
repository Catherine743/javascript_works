
for (let r = 1; r <= 5; r++) {
    let pattern = "";

    
    for (let s = 1; s <= 5 - r; s++) {
        pattern += "\t";  
    }

    
    for (let c = 1; c <= r; c++) {
        pattern += "*\t";
    }

    console.log(pattern);
}
