arr = [10,20,30,40,50];
newArr = [];

newArr[0] = arr[arr.length - 1];

for (i = 0; i < arr.length - 1; i++) {
    newArr[i + 1] = arr[i];
}

console.log(newArr);


