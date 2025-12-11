let row = 5;
let col = 9; 
let center = Math.floor(col / 2);

for (let r = row; r >= 1; r--) {
    let pattern = "";

    let left = center - (r - 1);
    let right = center + (r - 1);

    for (let c = 0; c < col; c++) {
        if (c >= left && c <= right) {
            pattern += "*\t";
            left += 2;
        } 
        else {
            pattern += "\t";
        }
    }

    console.log(pattern);
}