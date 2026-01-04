function counter() {
    count = 0;

    return function () {
        count++;
        return count;
    };
}
countSys = counter();
console.log(countSys());
console.log(countSys());
console.log(countSys());


