function outer() {
    count = 0;
    function inner() {
        count++;
        return count;
    }

    return inner;
}

counter = outer();

console.log(counter()); 
console.log(counter()); 
console.log(counter()); 
