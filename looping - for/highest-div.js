var num1 = 24;
var num2 = 18;
var div = 0;
var min = 0;

if (num1 < num2) {
    min = num1;
}
else {
    min = num2;
}

for (i = 1; i <= min; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
        if (div < i) {
            div = i;
        }
    }
}

console.log(`GCD of ${num1} and ${num2} is ${div}`);
