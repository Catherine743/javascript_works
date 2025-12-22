numbers = [12,5,20,8,15,30,7,25,10,18];

small = numbers.reduce((n1,n2) => n1 < n2? n1 : n2);
console.log(`Smallest element is ${small}`);