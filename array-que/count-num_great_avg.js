numbers = [12,5,20,8,15,30,7,25,10,18];

average = numbers.reduce((n1, n2) => n1 + n2, 0) / numbers.length;
countNum = numbers.filter(n => n > average)
console.log(countNum);