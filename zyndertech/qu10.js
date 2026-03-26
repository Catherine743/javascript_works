arr = ["apple","banana","orange","apple","banana","jackfruit","banana"];

map = {};
maxCount = 0;
maxElement = "";

for (i = 0; i < arr.length; i++) {
    if (map[arr[i]]){
        map[arr[i]]++;
    }
    else{
        map[arr[i]] = 1;
    }

    if (map[arr[i]] > maxCount) {
        maxCount = map[arr[i]];
        maxElement = arr[i];
    }
}

console.log("Most repeating:", maxElement);