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

for (r = 1; r <= 5; r++){
    pattern = "";
    for(c = r; c <= r; c++){
        if(r + c == 6 ){
         pattern = pattern + " ";
        }
        else{
            pattern = pattern + "* "
        }
        
    }
    console.log(pattern);
    
}