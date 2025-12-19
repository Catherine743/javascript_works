var arr = [1,2,3,4,5,6]

target = 6;

left = 0;
right = arr.length - 1;

while (left < right){
    curSum = arr[left] + arr[right];
    if(curSum == target){
        console.log(`${arr[left]}, ${arr[right]}`);
        break;   
    }
    else if (curSum > target){
        right--;
    }
    else{
        left++;
    }
}