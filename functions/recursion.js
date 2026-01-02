// recursion - a function which call the same function within itself

function counter(n){ // n = 3, n = 2, n = 1, n = 0
    if (n == 0){ // 3 == 0 => F, 2 == 0 => F, 1 == 0 => F, 0 == 0 => T
        return
    }
    console.log("hello"); // hello hello hello
    counter(n-1) // counter(2), counter(1), counter(0)
}

counter(3);

// Factorial
function factorial(n){ 
    if (n == 0){ 
        return 1;
    }
    return n*factorial(n-1);
}

console.log(factorial(5)); 

// display digits of a number

function digit(n){

    if(n == 0){
        return 
    }
    console.log(n % 10); // 3
    return digit(Math.floor(n / 10)) 
}

digit(123);

// sum of digits

// sum = 0;
function sumDig(n){
    if(n == 0){
        return sum; // or return 0
    }
    // dig = n % 10;
    // sum = sum + dig; 
    return sumDig(Math.floor(n / 10)) // or number%10 + sumDig(Math.floor(n / 10))
}
// console.log(sumDig(234));

// sum of numbers

// sum = 0;
function sumNum(n){
    if(n == 0){
        return sum
    }
    // sum = sum + n;
    return sumNum(n - 1) // or return n + sumNum(n - 1)
}

// console.log(sumNum(5));

// nested function

function outerFun(){
    function innFun(){
        console.log("Inner function");
        
    }
    innFun();
}

outerFun();

// add nested function

function outer(num1){
    function wrapper(num2){
        return num1 + num2;
    }
    return wrapper;
}

console.log(outer(100)(200));

// check user and password
function login(username){
    function pass(password){
        return username == "admin" && password == "admin@123"
    }
    return pass
}

console.log(login("admin")("admin@123"));

// greetings

function greet(username){
    function greetings(message){
        // return username + ", " + message
        // or return `Hello ${username}, ${message}`;
        return `Hello ${username}, ${message}`.toUpperCase(); // to make uppercase
    }
    return greetings
}

console.log(greet("Vipin")("goodmorning")); // console.log(greet("Hello Vipin")("goodmorning"));

// should be a condition to terminate the function otherwise it will go on
