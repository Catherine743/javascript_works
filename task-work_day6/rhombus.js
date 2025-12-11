let rows = 6;      // height of rhombus
let stars = 4;     // number of stars in each row

for (let r = 1; r <= rows; r++) {

    let pattern = "";

    // print leading spaces (shift right)
    for (let s = 1; s < r; s++) {
        pattern += "\t";
    }

    // print fixed number of stars
    for (let st = 1; st <= stars; st++) {
        pattern += "*\t";
    }

    console.log(pattern);
}



