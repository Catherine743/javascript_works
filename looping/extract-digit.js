var num = 543; // num = 543

while (num != 0){ // 543 != 0 =>T, 54 != 0 =>T, 5 != 0 =>T, 0 != 0 =>F
    digit = num % 10; // 543 % 10 = 3, 54 % 10 = 4, 5 % 10 = 5
    console.log(digit); // 3,4,5
    num = Math.floor(num / 10) // 543//10 =>54, 54//10 =>5, 5//10 =>0 
    
}