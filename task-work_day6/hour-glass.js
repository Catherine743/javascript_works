let row = 5;
let col = 9; // total columns to fit the pyramid
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
for (let r = 2; r <= row; r++) {
    pattern = ""; 
    let i = 0; // initialize i for this row

    for (let c = 1; c <= col; c++) {

        // Use parentheses to handle precedence correctly
        if ((r + c == 6 || r + c == 8 || r + c == 10 || r + c == 12 || r + c == 14) && i < r) {
            pattern = pattern + "*\t";   // place star
            i++;                   // count stars placed in this row
        }
        else{
            pattern = pattern + "\t";
        }

    }

    console.log(pattern);
}