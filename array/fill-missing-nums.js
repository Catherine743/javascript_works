var arr = [1, 3, 5, 6, 7, 9];
var newArr = [];
var i = 1;
var j = 0;

for (let n of arr) {

    newArr[j] = n;   // always add current number
    j++;

    if (i < arr.length) {
        temp = n + 1;

        while (temp < arr[i]) {
            newArr[j] = temp;
            j++;
            temp++;
        }
        i++;
    }
}

console.log(newArr);


