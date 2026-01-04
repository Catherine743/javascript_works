arr = [10,22,33,71,98];
function num(arr) {
    function even() {
        result = [];
        for (i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                result.push(arr[i]);
            }
        }
        return result;
    }
    return even();
}

console.log(num(arr)); 