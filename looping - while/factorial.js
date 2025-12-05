var num = 5; // num = 5
var fact = 1; // fact = 1
var i = 1; // i = 1

while (i <= num){ // 1 <= 5 =>T, 2 <= 5 =>T, 3 <= 5 =>T , 4 <= 5 =>T, 5 <= 5 =>T, 6 <= 5 =>F
    fact = fact * i; // fact = 1*1 = 1, fact = 1*2 = 2, fact = 2*3 = 6, fact = 6*4 = 24, fact = 24*5 = 120
    i++; //2,3,4,5,6
}

console.log(`Factorial of ${num}! is ${fact}`); // Factorial of 5! is 120
