let arr = [10,12,52,12,52,12,34,12,12];
let newArr = [];

for (let n of arr) {
    if (!newArr.includes(n)) {
        newArr.push(n);
    }
}

console.log(newArr);

