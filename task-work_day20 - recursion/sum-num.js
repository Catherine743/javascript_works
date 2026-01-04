sum = 0;
function sumNum(n){
    if(n == 0){
        return sum;
    }
    sum = sum + n;
    return sumNum(n - 1);
}

console.log(`Sum of numbers is ${sumNum(10)}`);
