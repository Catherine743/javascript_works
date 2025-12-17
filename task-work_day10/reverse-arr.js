let arr = [10, 20, 30, 40, 50];
let reverse = [];
let j = 0;

for (let i = arr.length - 1; i >= 0; i--) {
    reverse[j] = arr[i];
    j++;
}

console.log(reverse);

