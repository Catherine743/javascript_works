var num1 = 24;
var num2 = 12;
var gcd = 1;
var min = num1 < num2? num1 : num2;

for (i = 1; i <= min; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
        gcd = i;
    }
}

console.log(`GCD of ${num1} and ${num2} is ${gcd}`);
