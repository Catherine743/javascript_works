function sumDigits(num){
    let reverse = [];
    let sum = 0;
    let i = 0;

    while(num != 0){
        let dig = num % 10;
        sum = sum + dig;
        reverse[i] = dig;
        i++;
        num = Math.floor(num / 10);
    }

    
    reverse = reverse.reverse();

    return `${reverse.join(" + ")} = ${sum}`;
}

console.log(sumDigits(1234));

