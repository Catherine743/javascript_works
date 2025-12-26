football = {
    Brazil : 5,
    Portugal : 0,
    England : 1,
    Germany : 4,
    Argentina : 3,
    Urugay : 2,
    Espain : 1,
    Italy : 4,
    France : 2
}

// for(let k in football){
//     console.log(k);
    
// }

// for(let k of Object.keys(football)){
//     console.log(k);
    
// }

// for(let v of Object.values(football)){
//     console.log(v);
    
// }

for(let item of Object.entries(football)){
    console.log(item);
    
}

for(let item of Object.entries(football)){
    console.log(item[0]);
    console.log(item[1]);
    
    
}

