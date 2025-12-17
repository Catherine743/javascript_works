arr = [10,20,30,40,50]
secLrg = 0

max = arr[0] 
for(let n of arr){
    if(max < n ){
        secLrg = max;
        max = n;
    }
}

console.log(`Second largest number is ${secLrg}`);
