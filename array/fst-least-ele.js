var arr = [1,2,4,5];

var left = 0;
var right = left + 1;

while(left < arr.length - 1){
    diff = arr[right] - arr[left];
    if (diff != 1){
        console.log(`${arr[left]+1} is missing`);
        break;
        
    }
    left++;
    right++;
}