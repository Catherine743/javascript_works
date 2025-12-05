// common divisors of num1 and num2

var num1 = 12; // num1 = 12
var num2 = 24; // num2 = 24

var min = 0; // min = 0

if(num1 < num2){ // 12 < 24 =>T
    min = num1; // min = 12
}
else{
    min = num2;
}

var i = 1; // i =1

while (i <= min){ // 1 <= 12 =>T
    if(num1 % i == 0 && num2 % i == 0){ // 12 % 1 == 0 && 24 % 1 == 0 =>T
        console.log(i); // 1
        
    }
    i++; // 2,,,,,
}