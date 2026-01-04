count = 0;
function countDig(n){
    if (n == 0){
        return count;
    }
    count ++;
    return countDig(Math.floor(n / 10));
}

console.log("No of digits is",countDig(234));
