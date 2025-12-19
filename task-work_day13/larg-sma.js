arr = [90,50,100,40,70]

max = arr[0];
min = arr[0];

for(let n of arr){
    if(max < n){
        max = n;
    }
}

console.log(`Largest element is ${max}`);

for(let n of arr){
    if (min > n){
        min = n;
    }
}

console.log(`Smallest element is ${min}`);



