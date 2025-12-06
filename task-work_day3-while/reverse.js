num = 1234;
reverse = [];
i = 0;

while(num != 0){
    digit = num % 10;
    reverse[i] = digit;
    i++;
    num = Math.floor(num / 10);
    
}

console.log(reverse.join(""));
