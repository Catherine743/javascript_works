X = 2;
n = 5;

function power(X, n) {
    if (n === 0) {
        return 1;  
    }
    return X * power(X, n - 1);
}

console.log(`Power of ${X}^${n} is ${power(X, n)}`); 

// function power(base, exp) {
//     let result = 1;
//     for (let i = 1; i <= exp; i++) {
//         result *= base;
//     }
//     return result;
// }

// console.log(power(2, 5)); 

