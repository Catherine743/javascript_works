var num1 = 10; // num1 =10
var num2 = 15; // num2 = 15

if (num1 > num2){ // 10 > 15 => false
    console.log(`${num1} is largest`); // does not print this
} 
else if (num2 > num1){ // 15 > 10 => true
    console.log(`${num2} is largest`);  // prin this
}
else if (num1 == num2){
    console.log("Both are equal");
}
else{
    console.log("Invalid ");
    
}