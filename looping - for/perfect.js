var num = 6; 
var sum = 0;

for (i = 1; i < num; i++){ // i=1, i=2, i=3, i=4, i=5
    if(num % i == 0){ // 6 % 1 =>T, 6 % 2 =>T, 6 % 3 =>T, 6 % 4 =>F, 6 % 5 =>F 
        sum = sum + i // sum = 0 + 1 = 1, sum = 1 + 2 = 3, sum = 3 + 3 = 6
    }
}

console.log(sum == num? "Perfect number" :  "Not perfect number"); //Perfect number
