sum = 0;

for(i=1 ; i <= 100; i++){
    if(i % 2 == 0){
        sum = sum + i;
        
    }
}

console.log(`Sum of even numbers between 1 and 100 is ${sum}`);
