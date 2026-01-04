arr = [5, 20, 35, 17, 43];

function calculate(arr) {
    sum = 0;
    function total() {
        for (i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    function avg() {
        return sum / arr.length;
    }
    console.log("Sum =",total());
    console.log("Avg =",avg());
    
}

calculate(arr);


