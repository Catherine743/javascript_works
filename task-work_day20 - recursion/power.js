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


// power(2,5) = 2 * power(2,4) // 2 * 16 = 32  ^
// power(2,4) = 2 * power(2,3) // 2 * 8 = 16   |
// power(2,3) = 2 * power(2,2) // 2 * 4 = 8    |
// power(2,2) = 2 * power(2,1) // 2 * 2 = 4    | 
// power(2,1) = 2 * power(2,0) // 2 * 1 = 2    |
// power(2,0) = 1                              |
