var arr = [1, 3, 5, 6, 7, 9];
var newArr = [];
var i = 1;
var j = 0;

for (let n of arr) { // 1, 3, 5

    newArr[j] = n;   // newArr[0] = 1, newArr[2] = 3, newArr[4] = 5
    j++; // 1, 3, 5

    if (i < arr.length) { // 1 < 6, 2 < 6, 3 < 6
        temp = n + 1; // temp = 1 + 1 = 2, temp = 3 + 1 = 4, temp = 5 + 1 = 6

        while (temp < arr[i]) { // 2 < 3 => T, 3 < 3 => F, 4 < 5 => T, 5 < 5 => F, 6 < 6 => F
            newArr[j] = temp; // newArr[1] = 2, newArr[3] = 4
            j++; // j = 2, j = 4
            temp++; // 3, 5
        }
        i++; // 2,3,4
    }
}

console.log(newArr);


