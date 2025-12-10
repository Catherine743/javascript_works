var limit = 10;
var prev = 0;
var curr = 1;
var sum = 1;

add = `${prev} + ${curr}`


for (i = 1; i <= limit - 2; i++) {
    next = prev + curr;
    add = `${add} + ${next}`
    sum = sum + next;
    prev = curr;
    curr = next;

}
console.log(`${add} = ${sum}`);