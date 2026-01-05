row = 5;
col = 9; 
center = Math.floor(col / 2);

for (r = row; r >= 1; r--) {
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
for (r = 2; r <= row; r++) {
    pattern = ""; 
    i = 0; 

    for (c = 1; c <= col; c++) {

       
        if ((r + c == 6 || r + c == 8 || r + c == 10 || r + c == 12 || r + c == 14) && i < r) {
            pattern = pattern + "*\t";   
            i++;                  
        }
        else{
            pattern = pattern + "\t";
        }

    }

    console.log(pattern);
}