base = 2;
exp = 5;
power = base;

// var power = base ** 1;
// console.log(power);


for(i = 1; i < exp; i++){
    power = power * base;
    // console.log(power);
    
}
    
console.log(`${base} ** ${exp} = ${power}`);


