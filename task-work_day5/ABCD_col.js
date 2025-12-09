alp = "ABCD";
i = 0;

for (r = 1; r <= 4; r++) {
    pattern = "";
    for (c = 1; c <= 4; c++) {
        pattern = pattern + alp[i] + "\t";
    }
    i++;
    console.log(pattern);
}