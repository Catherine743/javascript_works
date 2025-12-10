var num = 500;

for (prf = 1; prf <= num; prf++) {
    sum = 0;
    for (i = 1; i < prf; i++) {
        if (prf % i == 0) {
            sum = sum + i;
        }
    }
    if (sum == prf) {
        console.log(prf);

    }
}