let row = 5;
let col = 9;

for (let r = 1; r <= row; r++) {
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