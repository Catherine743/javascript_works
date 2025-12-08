var num = 29;
var isPrime = true;

for(i = 2; i < num; i++){
    if(num % i == 0){
        isPrime = false;
        break;
    }
}

console.log(isPrime? "Prime Number" : "Not Prime Number");
