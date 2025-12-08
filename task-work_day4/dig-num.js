num = 98765;
rev = [];

for(i = 0; num != 0; i++){
    dig = num % 10;
    rev[i] = dig;
    num = Math.floor(num / 10);
}

reverse = rev.reverse();

for (let d of reverse) {
    console.log(d);
}





