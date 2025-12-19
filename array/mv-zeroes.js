var arr = [-1,0,-1,0,0,-1,0,0,-1]
count = 0;
newArr = []
i = 0;

for(let n of arr){
    if(n < 0){
        newArr.unshift(-1)
    }
    else{
        newArr.push(0)
    }
    
}

console.log(newArr);
