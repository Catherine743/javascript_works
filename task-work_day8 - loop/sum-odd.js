num = 1234;
sum = 0;
numSum = ""

while (num != 0) {
    dig = num % 10;
    if (dig % 2 != 0) {
        sum = sum + dig;
        if (numSum == "") {
            numSum = dig;
        }
        else {
            numSum = dig + " + " + numSum;
        }
    }

    num = Math.floor(num / 10);
}

console.log(numSum + " = " + sum);
