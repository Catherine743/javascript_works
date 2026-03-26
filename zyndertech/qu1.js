// firstRepeating([10, 5, 3, 4, 3, 5, 6]) 
// output is 5

function firstRepeating(arr) {
    map = {};

    // count frequency
    for (i = 0; i < arr.length; i++) {
        if(map[arr[i]]){
            map[arr[i]]++;
        }
        else{
            map[arr[i]] = 1;
        }
    }

    // return first element with freq > 1
    for (i = 0; i < arr.length; i++) {
        if (map[arr[i]] > 1) {
            return arr[i];
        }
    }

    return -1;
}

console.log(firstRepeating([10, 5, 3, 4, 3, 5, 6]));