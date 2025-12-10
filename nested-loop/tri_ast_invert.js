// for (r = 1; r <= 5; r++) {
//     pattern = "";
//     for (c = 1; c <= 5; c++) {
//         if (r + c <= 6) {
//             pattern = pattern + "*\t";
//         }
//     }
//     console.log(pattern);
// }

for (r = 5; r >= 1; r--){
    pattern = "";
    for(c = 1; c <= r; c++){
       pattern = pattern + "*\t";
        
    }
    console.log(pattern);
    
}