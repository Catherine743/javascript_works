let arr1 = [10,20,30,40,50];
let arr2 = [60,70,80,90];
let arr = [];
let j = 0;

for (let n of arr1) {
    arr[j] = n;
    j++;
}

for (let n of arr2) {
    arr[j] = n;
    j++;
}

console.log(arr);




