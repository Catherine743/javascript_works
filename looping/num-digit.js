var num = 3456;

noDigit = 0;

while (num != 0){
    digit = num % 10;
    num = Math.floor(num / 10)
    noDigit++;
    
}
console.log(noDigit);
