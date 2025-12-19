var arr = [10,11,12,12,13,14,15,15];
left = 0;
right = left +1;

while (left < arr.length - 1){
    diff = arr[right] - arr[left];
    if(diff == 0){
        console.log(`${arr[left]}`);
    }
    left++;
    right++;
}
    