rows = 6;     
stars = 4;     

for (r = 1; r <= rows; r++) {

    pattern = "";

   
    for (s = 1; s < r; s++) {
        pattern += "\t";
    }

   
    for (st = 1; st <= stars; st++) {
        pattern += "*\t";
    }

    console.log(pattern);
}



