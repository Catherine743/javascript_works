count = 0;

for(i=1; i <= 200; i++){
    if(i % 3 == 0 && i % 5 == 0){
        count++;
    }
}

console.log(`Numbers that divisible by both 3 and 5 between 1 and 200 is ${count}`);
