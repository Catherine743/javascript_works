arr = [20,89,95,77,10];
reverse = [];
j = 0;

for(i = arr.length - 1; i >= 0; i--){
    reverse[j] = arr[i]
    j++;
}

console.log(reverse);
