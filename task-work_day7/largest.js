function largest(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        return `${num1} is the largest number`
    }
    else if (num2 > num1 && num2 > num3){
        return `${num2} is the largest number`
    }
    else{
        return `${num3} is the largest number`
    }
}

console.log(largest(10,25,15));
