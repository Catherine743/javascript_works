arr = [20,89,95,77,10];
countOdd = 0;
countEven = 0;

for(let n of arr){
    if(n % 2 == 0){
        countEven++;
    }
    else{
        countOdd++;
    }
}

console.log(`Even numbers -> ${countEven}, Odd numbers -> ${countOdd}`);
