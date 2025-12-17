num = [20,30,10,50,80];

min = num[0];

for(let n of num){
    if(min > n){
        min = n;
    }
}

console.log(`Smallest number is ${min}`);

max = num[0];

for(let n of num){
    if (max < n){
        max = n;
    }
}

console.log(`Largest number is ${max}`);

