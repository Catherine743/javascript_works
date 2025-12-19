arr = [12,24,30,12,60,12,12];
num = 12;
count = 0;

for(let n of arr){
    if(num == n){
        count++;
    }
}

console.log(`Number ${num} appears ${count} times`);
