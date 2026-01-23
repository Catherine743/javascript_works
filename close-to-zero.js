// write a javascript program to find the closest number to zero from a given array.
// Ex: [1,-1,-2,3]
// Note: If 2 numbers are at the same distance from zero, return the larger number.

// input = [1,-1,-2,3];
// closest = null;

// for(i = 0; i < input.length; i++) {
//     num = input[i];
//     if(closest == null) {
//         closest = num;
//     }
//     else if(Math.abs(num) < Math.abs(closest)) {
//         closest = num;
//     }
//     else if(Math.abs(num) == Math.abs(closest) && num > closest) {
//         closest = num;
//     }
// }
// console.log(closest);
 
// another way without using Math.abs

arr = [1, -1, -2, 3];
minDist = 9999;

for (n of arr) { // 1, -1
    dist = n < 0 ? -n : n; // 1, 1

    if (dist < minDist || (dist == minDist && n > ans)) { // 1 < 9999 => T // 1 == 1 && -1 > 1 => F
        minDist = dist; // minDist = 1
        ans = n; // ans = 1
    }
}

console.log(ans);

