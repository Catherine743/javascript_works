var year = 2000; // input year = 4000

if (year % 100 == 0 && year % 400 == 0 || year % 100 != 0 && year % 4 == 0){ // 4000 % 100 == 0 && 4000 % 400 == 0 => true
    console.log("Leap Year"); // print this
    
}
else{
    console.log("Not a leap year");
    
}