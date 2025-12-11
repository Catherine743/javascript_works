
let rows = 5;

for (let r = 0; r < rows; r++) {
    let pattern = "";


    for (let s = 0; s < rows - r; s++) {
        pattern += "\t";
    }

    
    let val = 1;
    for (let c = 0; c <= r; c++) {
        pattern += val + "\t\t";

        
        val = val * (r - c) / (c + 1);
    }

    console.log(pattern);
}
