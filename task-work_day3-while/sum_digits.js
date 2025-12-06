num = 245;
numCopy = num;
sum = 0;
i = 0;
reverse = [];

while(num != 0){
    digit = num % 10;
    sum = sum + digit;
    reverse[i] = digit;
    i++;
    num = Math.floor(num / 10)
    
}

reverse.reverse();
add = reverse.join(" + ") + " = " + sum;

console.log(add);
console.log(`Sum of digits in ${numCopy} is ${sum}`);
