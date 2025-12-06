num = 345; 
count = 0; 
numCopy = num;

while (num != 0){ 
    num = Math.floor(num / 10) 
    count++; 
}

console.log(`No of digits in ${numCopy} is ${count}`);