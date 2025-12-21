let numbers = [12,5,20,8,15,30,7,25,10,18];

avg = numbers.reduce((n1,n2) => n1 + n2) / numbers.length;
countLessAvg = numbers.reduce((count,n) => n < avg? count + 1 : count,0);
console.log(`Count of numbers less than average is ${countLessAvg}`);
