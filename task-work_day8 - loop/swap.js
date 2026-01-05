num = 7326;
temp = 0;
result = "";
middle = ""; 

while(num != 0){
    dig = num % 10;
    if (temp == 0){
        result = result + dig;
        temp = 1;
    }
    else if(num < 10){
        result = result + middle + num;
    }
    else{
        middle = dig + middle ;
    }
    num = Math.floor(num / 10);
}

console.log(result);

