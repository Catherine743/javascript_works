let numbers = [12,5,20,8,15,30,7,25,10,18];

index = numbers.reduce((sum,value,index) => index % 2 == 0? sum + value : sum);
console.log(`Sum of numbers at even index is ${index}`);

