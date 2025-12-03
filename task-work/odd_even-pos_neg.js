var num = 5;

if(num % 2 == 0 && num < 0){
    console.log("The number is even and negative");
    
}
else if (num % 2 == 0 && num > 0){
    console.log("The number is even and positive");
    
}
else if (num % 2 != 0 && num < 0){
    console.log("The number is odd and negative");
    
}
else if (num % 2 != 0 && num > 0){
    console.log("The number is odd and positive");
    
}
else{
    console.log("Invalid");
    
}