numbers = [12,5,20,8,15,30,7,25,10,18];

numEven = numbers.filter(n => n % 2 == 0);
sumEven = numEven.reduce((n1,n2) => n1 + n2)
console.log(`Sum of even numbers is ${sumEven}`);