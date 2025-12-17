num = [11,20,77,34,60];
cntOdd = 0;
cntEven = 0;

for(let n of num){
    if(n % 2 == 0){
        cntEven++;
    }
    else{
        cntOdd++;
    }
}

console.log(`Even numbers -> ${cntEven}, Odd numbers -> ${cntOdd}`);
