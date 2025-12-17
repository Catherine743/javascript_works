max = 0;
arr = [20,80,90,70,10]

for(let n of arr){
    if(max < n){
        max = n
    }
}

console.log(`Largest element in an array is ${max}`);
