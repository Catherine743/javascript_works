function sumDigits(num){
    reverse = [];
    sum = 0;
    i = 0;

    while(num != 0){
        dig = num % 10;
        sum = sum + dig;
        reverse[i] = dig;
        i++;
        num = Math.floor(num / 10);
    }

    
    reverse = reverse.reverse();

    return `${reverse.join(" + ")} = ${sum}`;
}

console.log(sumDigits(1234));

