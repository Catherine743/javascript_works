rows = 5;

for (i = 1; i <= rows; i++) {
    pattern = "";

    // spaces before stars
    for (s = 1; s <= rows - i; s++) {
        pattern += " ";
    }

    // stars and inner spaces
    for (j = 1; j <= (2 * i - 1); j++) {
        // first star, last star, or last row
        if (j === 1 || j === (2 * i - 1) || i === rows) {
            pattern += "*";
        } else {
            pattern += " ";
        }
    }

    console.log(pattern);
}

// or
// for (r = 1; r <= 5; r++) {
//     pattern = "";
//     for (c = 1; c <= 9; c++) {
//         if (r + c == 6 || c - r == 4 || (r == 5 && c % 2 != 0)) {
//             pattern = pattern + "*\t";
//         }
//         else{
//             pattern = pattern + "\t";
//         }
//     }
//     console.log(pattern);
// }
