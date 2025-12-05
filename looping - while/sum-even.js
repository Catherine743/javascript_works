var limit = 5; // limit = 5
var sum = 0; // sum = 0
var i = 1; // i = 1

while (i <= limit){ // 1 <= 5 =>T, 2 <= 5 =>T, 3 <= 5 =>T, 4 <= 5 =>T, 5 <= 5 =>T, 6 <= 5 =>F
    if(i % 2 == 0){ // 1 % 2 == 0 =>F, 2 % 2 == 0 =>T, 3 % 2 == 0 =>F, 4 % 2 == 0 =>T, 5 % 2 == 0 =>F
        sum = sum + i; // sum = 0 + 2 = 2, sum = 2 + 4 = 6
        
    }
    i++; //2,3,4,5,6
}

console.log(sum);//6