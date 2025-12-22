numbers = [12,5,20,8,15,30,7,25,10,18];

average = numbers.reduce((n1, n2) => n1 + n2, 0) / numbers.length;
countNum = numbers.reduce((count,n) => n > average? count + 1 : count,0)
console.log(`Count of numbers greater than average is ${countNum}`);