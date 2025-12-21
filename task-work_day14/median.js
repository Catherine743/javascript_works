let numbers = [12,5,20,8,15,30,7,25,10,18];

numbers.sort((n1,n2) => n1 - n2);
mid = Math.floor(numbers.length / 2);
median = numbers.length % 2 !== 0? numbers[mid]: (numbers[mid - 1] + numbers[mid]) / 2;
console.log(median);

