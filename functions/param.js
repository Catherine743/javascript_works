// function add(num1,num2){
//     console.log(`Sum of ${num1} and ${num2} is ${num1+num2}`);
    
// }
// add(100,200);

// function greetings(name){
//     console.log(`Good mrning ${name}`);
    
// }
// greetings("Joe")

// function subtract(num1,num2){
//     console.log(`Subtraction of ${num1} and ${num2} is ${num1-num2}`);
    
// }
// subtract(100,20)

// function multiplication(num1,num2){
//     console.log(`Multiplication of ${num1} and ${num2} is ${num1*num2}`);
    
// }

// multiplication(10,20);

// function division(num1,num2){
//     console.log(`Division of ${num1} and ${num2} is ${num1/num2}`);
    
// }

// division(100,5);

// function divisible(num1){
//     if(num1 % 3 == 0 && num1 % 5 == 0){
//     console.log(`${num1} is divisible by 3 and 5`);
//     }
//     else{
//     console.log(`${num1} is not divisible by 3 and 5`);
    
//     }
    
// }

// divisible(27);
// divisible(15);

// function cube(num){
//     return num**3;
// }
// console.log(cube(5));
// console.log(cube(7));

// function isOdd(num){
//     // if(num % 2 != 0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
//     return num % 2 != 0? true:false;
// }

// console.log(isOdd(7))
// console.log(isOdd(8));

function numberChek(num){
    // if(num > 0){
    //     res = console.log(`${num} is positive`);
        
    //     return res
        
    // }
    // else if(num < 0){
        
    //     // return "negative"
    // }
    // else{
    //     return "zero"
        
    // }
    return num>0?"Positive":num<0?"Negative":"Zero"
}

console.log(numberChek(5));
console.log(numberChek(-5));
console.log(numberChek(0));


