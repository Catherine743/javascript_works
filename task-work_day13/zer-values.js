var arr = [2,0,3,0,0,5,0,0,7]
newArr = []
count = 0;

for(let n of arr){
    if(n != 0){
        newArr.push(n)
    }
    else{
        count++;
    }
    
}

for(i = 0; i< count; i++){
    newArr.push(0);
}

console.log(newArr);