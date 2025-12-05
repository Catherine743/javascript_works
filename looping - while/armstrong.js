var num = 153; // num = 153
var sum = 0; // sum = 0
var count = 0; // count = 0
var numCopy = num; // numCopy = 153
var original = num;

while(num != 0){ // 153 != 0 =>T, 15 != 0 =>T, 1 != 0 =>T, 0 != 0 =>F
    count++; // 3
    num = Math.floor(num / 10) // 153//10 = 15, 15//10 = 1, 1//10 = 0
}

while (numCopy != 0){ // 153 != 0 =>T, 15 != 0 =>T, 1 != 0 =>T, 0 != 0 =>F
    let digit = numCopy % 10; // digit = 153 % 10 = 3, digit = 15 % 10 = 5, digit = 1 % 10 = 0 
    let exponent = digit ** count; // exp = 3^3 = 27, exp = 5^3 = 125, exp = 1^3 = 3
    sum = sum + exponent; // sum = 0 + 27 =27, sum = 27 + 125 = 152, sum = 152 + 1 = 153
    numCopy = Math.floor(numCopy / 10) // num = 153//10 = 15, num = 15//10 = 1, num = 1//10 = 0
}

console.log(sum); // 153

// if(sum == original){
//     console.log("Armstrong number");
    
// }
// else{
//     console.log("Not armstrong number");
    
// }

console.log(sum == original? "Armstrong number" : "Not armstrong number");




