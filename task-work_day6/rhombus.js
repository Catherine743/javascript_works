let rows = 6;     
let stars = 4;     

for (let r = 1; r <= rows; r++) {

    let pattern = "";

   
    for (let s = 1; s < r; s++) {
        pattern += "\t";
    }

   
    for (let st = 1; st <= stars; st++) {
        pattern += "*\t";
    }

    console.log(pattern);
}



