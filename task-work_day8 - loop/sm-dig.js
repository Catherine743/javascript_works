num = 5276;
var sm;

while(num != 0){
    dig = num % 10;
    if (sm == null){
        sm = dig;
    }
    else{
        if(sm > dig){
            sm = dig;
        }
    }
    num = Math.floor(num / 10);
}

console.log(`Smallest digit of number ${num} is ${sm}`);
