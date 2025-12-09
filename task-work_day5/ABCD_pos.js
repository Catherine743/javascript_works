alp = "ABCD";
j = 0;

for (r = 1; r <= 4; r++) {
    pattern = "";
    i = j;
    for (c = 1; c <= 4; c++) {
        if (i != alp.length) {
            pattern = pattern + alp[i] + "\t";
            i++;
        }
        else{
            i = 0
            pattern = pattern + alp[i] + "\t"
            i++;
        }
    }
    j++;
    console.log(pattern);
}