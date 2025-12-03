var num1 = 40; // num1 = 40
var num2 = 40; // num2 = 80
var num3 = 80; // num3 = 30

if (num1 > num2 && num1 > num3){ // 40 > 80 and 40 > 30 => false
    console.log(`${num1} is largest`); 
    
}
else if (num2 > num3 && num2 > num1){ // 80 > 30 and 80 > 40 => true
    console.log(`${num2} is largest`); // print this
    
}
else if (num1 == num2 && num2 == num3){
    console.log("All are equal");
    
}
else{
    console.log(`${num3} is largest`);
    
}