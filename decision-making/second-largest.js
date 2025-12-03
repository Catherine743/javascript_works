var num1 = 80; // num1 = 800
var num2 = 4000; // num2 = 4000
var num3 = 800; // num3 = 100

if(num1 > num2 && num1 < num3 || num1 > num3 && num1 < num2){ // 800 > 4000 and 800 < 100 => true
    console.log(`${num1} is second largest`); // print this
    
}
else if (num2 > num1 && num2 < num3 || num2 > num3 && num2 < num1){
    console.log(`${num2} is second largest`);
    
}
else if (num1 == num2 && num2 == num3){
    console.log("All are equal");
    
}
else {
    console.log(`${num3} is second largest`);   
}
