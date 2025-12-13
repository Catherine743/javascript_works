function isPerfect(num){
    sum = 0;
    for(i = 1; i < num; i++){
        if(num % i == 0){
            sum = sum + i;
        }
    }
    return sum == num? "Perfect number" : "Not perfect number";
}

console.log(isPerfect(6));
console.log(isPerfect(8));
console.log(isPerfect(28));
