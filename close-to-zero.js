// write a javascript program to find the closest number to zero from a given array.
// Ex: [1,-1,-2,3]
// Note: If 2 numbers are at the same distance from zero, return the larger number.

arr = [1, -1, -2, 3];
nearest = arr[0];

for (let n of arr) {
    if (
        Math.abs(n) < Math.abs(nearest) ||
        (Math.abs(n) == Math.abs(nearest) && n > nearest)
    ) {
        nearest = n;
    }
}

console.log(nearest);


