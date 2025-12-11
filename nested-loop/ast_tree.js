// for (r = 1; r <= 5; r++) {
//     pattern = "";
//     // space
//     for (sp = 1; sp <= 5-r; sp++){
//         pattern = pattern + "\t";
//     }
//     //astrick
//     for (c = 1; c <= r; c++){
//         pattern = pattern + "*\t\t"
//     }
//     console.log(pattern);


// }

// let row = 5;
// let col = 9;
// let center = Math.floor(col / 2);

// for (let r = 1; r <= row; r++) {

//     let arr = new Array(col).fill("\t");

//     let left = center - (r - 1);
//     let right = center + (r - 1);

//     for (let k = left; k <= right; k += 2) {
//         arr[k] = "*\t";
//     }

//     console.log(arr.join(""));
// }

let row = 5;
let col = 9;

for (let r = 1; r <= row; r++) {
    let arr = new Array(col).fill("\t");
    let i = 0; // initialize i for this row

    for (let c = 1; c <= col; c++) {

        // Use parentheses to handle precedence correctly
        if ((r + c == 6 || r + c == 8 || r + c == 10 || r + c == 12 || r + c == 14) && i < r) {
            arr[c - 1] = "*\t";   // place star
            i++;                   // count stars placed in this row
        }

    }

    console.log(arr.join(""));
}





