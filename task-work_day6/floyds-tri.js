num = 1

for (r = 1; r <= 4; r++) {
    pattern = "";
    for (c = 1; c <= r; c++) {
       pattern = pattern + `${num}\t`
       num++; 
    }
    console.log(pattern);
}
