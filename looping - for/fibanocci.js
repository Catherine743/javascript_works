var limit = 10;
var prev = 0;
var curr = 1;

console.log(prev);
console.log(curr);

for(i=1; i <= limit-2; i++){
    next = prev + curr;
    console.log(next);
    prev = curr;
    curr = next;
 
}


