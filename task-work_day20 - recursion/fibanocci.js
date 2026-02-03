n = 7;
function fibanocci(n){
    if(n == 0) return 0;
    if(n == 1) return 1;
    return fibanocci(n - 1) + fibanocci (n - 2);
}

console.log(`Fibanocci of ${n} is ${fibanocci(n)}`);

// fibanocci(7) = fibanocci(6) + fibanocci(5) // 8 + 5 = 13 ^
// fibanocci(6) = fibanocci(5) + fibanocci(4) // 5 + 3 = 8  |
// fibanocci(5) = fibanocci(4) + fibanocci(3) // 3 + 2 = 5  | 
// fibanocci(4) = fibanocci(3) + fibanocci(2) // 2 + 1 = 3  |
// fibanocci(3) = fibanocci(2) + fibanocci(1) // 1 + 1 = 2  |
// fibanocci(2) = fibanocci(1) + fibanocci(0) // 1 + 0 = 1  |