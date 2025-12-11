for (r = 5 ; r >= 1; r--) {
    pattern = "";
    for (c = 1; c <= 9; c++) {
        if (r + c == 6 || c - r == 4 || (r == 5 && c % 2 != 0)) {
            pattern = pattern + "*\t";
        }
        else{
            pattern = pattern + "\t";
        }
    }
    console.log(pattern);
}