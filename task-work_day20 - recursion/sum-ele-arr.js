arr = [10,20,30,40,50];
sum = 0;
function sumEle(arr){
    for(i = 0 ; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}
console.log(`Sum of elements is ${sumEle(arr)}`);



