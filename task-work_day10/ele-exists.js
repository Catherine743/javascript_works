arr = [10,20,30,40,50]
num = 70;

isExist = false;
for(let n of arr){
    if(num == n){
        isExist = true
        break;
    }
}

if(isExist){
    console.log(`Number ${num} exists`);
    
}
else{
    console.log(`Number ${num} does not exists`);
    
}

