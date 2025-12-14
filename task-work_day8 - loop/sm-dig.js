num = 2301;
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

console.log(sm);
