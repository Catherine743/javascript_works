arr = [35,60,78,90,23]
newArr = []
i = 0

for(let n of arr){
    if(n % 2 == 0){
        newArr[i] = n
        i++;
        
    }
}

console.log(newArr);
