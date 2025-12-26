var expenses = {
    jazeel : 780,
    nazim : 680,
    arun : 1000,
    mahin : 500,
    amal : 750,
    thusar : 1500
}

total = 0;

for(let exp in expenses){
    total += expenses[exp];
}
console.log(`Total expense is ${total}`);

// max = 0;
// for(let exp in expenses){
//     if(expenses[exp] > max){
//         max = expenses[exp];
//     }
// }

// for(let exp in expenses){
//     if(max == expenses[exp]){
//         console.log(exp,max);
        
//     }
// }

split = total / Object.entries(expenses).length;
console.log(`Individual split is ${split}`);

var splitWise = {}
for(let exp in expenses){
    amount = expenses[exp];
    splitWise[exp] = split - amount;
}

console.log(splitWise);
