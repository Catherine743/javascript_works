for (r = 1; r <= 5; r++) {
    pattern = "";
    for (c = 1; c <= 5; c++) {
        if (r == 5 || r == 1 || c == 1 || c == 5) {
            pattern = pattern + "*\t";
        }
        else{
            pattern = pattern + "\t";
        }
    }
    console.log(pattern);
}