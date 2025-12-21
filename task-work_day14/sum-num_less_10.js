let numbers = [12,5,20,8,15,30,7,25,10,18];

num = numbers.filter(n => n > 10);
sum = num.reduce((n1,n2) => n1 + n2);
console.log(`Sum of numbers greater than 10 is ${sum}`);

