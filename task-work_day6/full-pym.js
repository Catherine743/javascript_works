rows = 5;

for (i = 1; i <= rows; i++) {
    pattern = "";

    // spaces
    for (s = 1; s <= rows - i; s++) {
        pattern += "\t";
    }

    // stars
    for (j = 1; j <= (2 * i - 1); j++) {
        pattern += "*\t";
    }

    console.log(pattern);
}

// or

// row = 5;
// col = 9;

// for (r = 1; r <= row; r++) {
//     pattern = ""; 
//     i = 0; 

//     for ( c = 1; c <= col; c++) {

        
//         if ((r + c == 6 || r + c == 8 || r + c == 10 || r + c == 12 || r + c == 14) && i < r) {
//             pattern = pattern + "*\t";   
//             i++;                   
//         }
//         else{
//             pattern = pattern + "\t";
//         }

//     }

//     console.log(pattern);
// }