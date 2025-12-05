var num = 345; // num = 345

var count = 0; // count = 0

while (num != 0){ // 3456 != 0 =>T, 34 != 0 =>T, 3 != 0 =>T, 0 != 0 =>F
    num = Math.floor(num / 10) // num = 345 / 10 =>34, 34 / 10 =>3,num = 3 / 10 = 0
    count++; // 3
}

console.log(count); // 3
