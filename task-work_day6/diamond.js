row = 5;
col = 9; 
center = Math.floor(col / 2);

for (r = 1; r <= row; r++) {
    pattern = "";

    left = center - (r - 1);
    right = center + (r - 1);

    for (c = 0; c < col; c++) {
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

for (r = row - 1; r >= 1; r--) {
    pattern = "";

    left = center - (r - 1);
    right = center + (r - 1);

    for (c = 0; c < col; c++) {
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