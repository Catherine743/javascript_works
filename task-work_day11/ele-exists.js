arr = [20,89,95,77,10];
num = 97;

isFound = false;
for(let n of arr){
    if(n == num){
        isFound = true;
        break;
    }
}

if(isFound){
    console.log(`Number ${num} exists in an array`);
    
}
else{
    console.log(`Number ${num} does not exists`);
    
}