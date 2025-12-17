let arr = [1, 0, 2, 0, 3];
let newArr = [];

let k = 0; 
let j = 0; 

for (let n of arr) {
    if (n === 0) {
        j++;            
    } else {
        newArr[k] = n;  
        k++;
    }
}

for (let i = 0; i < j; i++) {
    newArr[k] = 0;
    k++;
}

console.log(newArr);
