function isPrime(num){
    var isPrime = true;
    for(i = 2; i < num; i++){
        if (num % i == 0){
            isPrime = false;
            break;
        }
    }
    
    return isPrime? `${num} is prime no` : `${num} is not prime no`
}

console.log(isPrime(7));
console.log(isPrime(8));
