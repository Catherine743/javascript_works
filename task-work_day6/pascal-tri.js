
let rows = 5;

for (let r = 0; r < rows; r++) {
    let pattern = "";

    // spacing
    for (let s = 0; s < rows - r; s++) {
        pattern += "\t";
    }

    // calculate values of Pascal row
    let val = 1;
    for (let c = 0; c <= r; c++) {
        pattern += val + "\t\t";

        // update using formula: nCr = nCr * (n - r) / (r + 1)
        val = val * (r - c) / (c + 1);
    }

    console.log(pattern);
}
