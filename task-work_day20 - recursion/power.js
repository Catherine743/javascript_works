function power(X, n) {
    if (n === 0) {
        return 1;  
    }
    return X * power(X, n - 1);
}

console.log(power(2, 5)); 

// function power(base, exp) {
//     let result = 1;
//     for (let i = 1; i <= exp; i++) {
//         result *= base;
//     }
//     return result;
// }

// console.log(power(2, 5)); 

