function factorial(num){
    fact = 1; 
    for(i = 1; i <= num; i++){
        fact = fact * i;
    }
    return `Factorial of ${num}! is ${fact}`;
}

console.log(factorial(3));
console.log(factorial(5));
