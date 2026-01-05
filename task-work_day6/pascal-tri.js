
rows = 5;

for (r = 0; r < rows; r++) {
    pattern = "";


    for (s = 0; s < rows - r; s++) {
        pattern += "\t";
    }

    
    val = 1;
    for (c = 0; c <= r; c++) {
        pattern += val + "\t\t";

        
        val = val * (r - c) / (c + 1);
    }

    console.log(pattern);
}
