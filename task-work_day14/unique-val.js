let numbers = [12,5,20,8,15,30,7,25,10,18,25,25,30];

let uniqueVal = numbers.filter((n, index) => numbers.indexOf(n) == index);
console.log(uniqueVal);
