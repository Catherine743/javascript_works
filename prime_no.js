var num = 29;
pattern = "";

for (var prime = 2; prime <= num; prime++) {
    var isPrime = true;

    for (i = 2; i < prime; i++) {
        if (prime % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        // console.log(prime);

        res = `${prime} `
        pattern = pattern + res;

    }
    
}
console.log(pattern);
