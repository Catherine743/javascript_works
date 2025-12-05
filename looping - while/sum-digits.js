var num = 345;
var sum = 0;

while(num != 0){ // 345 != 0 =>T, 34 != 0 =>T, 3 != 0 =>T, 0 != 0 =>F
    digit = num % 10; // 345 % 10 = 5, 34 % 10 = 4, 3 % 10 = 3
    sum = sum + digit; // sum = 0 + 5 = 5, sum = 5 + 4 = 9, sum = 9 + 3 = 12
    num = Math.floor(num / 10); // 345//10 = 34, 34 // 10 = 3, 3 // 10 = 0
}
console.log(sum); // 12
