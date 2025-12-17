arr = [20,80,90,70,10];
min = arr[0];

for(let n of arr){
    if (min > n){
        min = n;
    }
}

console.log(`Smallest element is ${min}`);
