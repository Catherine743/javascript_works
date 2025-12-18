/*
// syntax
// variable = (p1,p2..) => expression

// variable = (p1,p2,p3...) => {
    
    // return expression
    
}

*/

// add

let add = (n1,n2) => n1+n2;
console.log(add(5,3));

//sub

let sub = (n1,n2) => n1-n2;
console.log(sub(10,4));

//lastDigitMax

let lastDigMax = (n1,n2) => n1 % 10 > n2 % 10? n1: n2;
console.log(lastDigMax(45,98));

//lastDigitSum

let lastDigSum = (n1,n2) => n1 % 10 + n2 % 10;
console.log(lastDigSum(57,63));

//square

let sqr = (n) => n ** 2;
console.log(sqr(3));

//maxTwo

let maxTwo = (n1,n2) => n1 > n2? n1 : n2;
console.log(maxTwo(35,12));


// normal fun - hoisting support
// arrow fun  - does not support hoisting

// hoisting means funtion will be hoisted when the function calls before it defines and will run the program.

// hoisting support based on keyword function

