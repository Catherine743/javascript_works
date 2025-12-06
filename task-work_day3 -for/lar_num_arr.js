arr = [12,5,9,45,22]
max = 0;
count = arr.length;

for(i = 0; i < count; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}

console.log(`Largest number of arr is ${max}`);
