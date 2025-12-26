var vegetables = {
    onion : 35,
    potato : 60,
    brinjal : 50,
    carrot : 70,
    beans : 100,
    garlic : 200,
    chilly : 120
}

// for(let veg in vegetables){
//     console.log(veg,vegetables[veg]);
    
// }

// available under 65

// for(let veg in vegetables){
//     if(vegetables[veg] < 65){
//         console.log(veg);
        
//     }
// }

// display costly product
max = 0;
for(let veg in vegetables){
    if (vegetables [veg] > max){
        max = vegetables[veg];
    }
}

for(let veg in vegetables){
    if(max == vegetables[veg]){
        console.log(veg,max);
        
    }
}
