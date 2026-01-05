rows = 5;

// Top half (including middle)
for (i = 1; i <= rows; i++) {
    pattern = "";

    // leading spaces
    for (s = 1; s <= rows - i; s++) {
        pattern += "\t";
    }

    // hollow part
    for (j = 1; j <= (2 * i - 1); j++) {
        if (j == 1 || j == (2 * i - 1)) {
            pattern += "*\t";
        } else {
            pattern += "\t";
        }
    }

    console.log(pattern);
}

// Bottom half
for (i = rows - 1; i >= 1; i--) {
    pattern = "";

    for (s = 1; s <= rows - i; s++) {
        pattern += "\t";
    }

    for (j = 1; j <= (2 * i - 1); j++) {
        if (j === 1 || j === (2 * i - 1)) {
            pattern += "*\t";
        } else {
            pattern += "\t";
        }
    }

    console.log(pattern);
}
// or

// for (r = 1; r <= 4; r++) {
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
// for (r = 3; r >= 1; r--) {
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