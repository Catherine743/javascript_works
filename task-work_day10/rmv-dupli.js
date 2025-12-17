let arr = [10, 20, 20, 30, 40, 50, 50];
let newArr = [];
let j = 0;

for (let n of arr) {
    let found = false;

    for (let i = 0; i < newArr.length; i++) {
        if (n == newArr[i]) {
            found = true;
            break;
        }
    }

    if (!found) {
        newArr[j] = n;
        j++;
    }
}

console.log(newArr);
