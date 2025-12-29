var expenses={
    prabinav:560,
    venkitesh:650,
    roshan:120,
    goutham:340,
    thushar:670,
    arun:67,
    jazeel:480,
    nazim:340,
    yadhu:0,
    amal:0,
    catherin:0,
    reshmi:0,
    sreelakshmi:0
}

// unpaid student names

// for(let [k,v] of Object.entries(expenses)){
//     if(v == 0){
//         console.log(k);
        
//     }
// }

unpaidStudents = Object.entries(expenses).filter(arr => arr[1] == 0);
console.log(unpaidStudents);

// paid students
paidStudents = Object.entries(expenses).filter(arr => arr[1] > 0);
console.log(paidStudents);

// paid greater than 250
paidGt250 = Object.entries(expenses).filter(arr => arr[1] > 250);
console.log(paidGt250);

// total expense
total = Object.values(expenses).reduce((sum, val) => sum + val, 0); // no problem withot zero value when Object.values is applied
console.log(total);

// individual split
individualSplit = Math.round(total / Object.entries(expenses).length);
console.log(individualSplit);

//splitWise
splitWise ={};
for(let [k,v] of Object.entries(expenses)){
    splitWise[k] = individualSplit - v;
}
console.log(splitWise);
