let row = 5;
let col = 9;

for (let r = 1; r <= row; r++) {
    pattern = ""; 
    let i = 0; 

    for (let c = 1; c <= col; c++) {

        
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