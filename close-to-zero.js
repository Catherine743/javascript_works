// write a javascript program to find the closest number to zero from a given array.
// Ex: [1,-1,-2,3]
// Note: If 2 numbers are at the same distance from zero, return the larger number.

// arr = [1, -1, -2, 3];
// nearest = arr[0];

// for (let n of arr) {
//     if (
//         Math.abs(n) < Math.abs(nearest) ||
//         (Math.abs(n) == Math.abs(nearest) && n > nearest)
//     ) {
//         nearest = n;
//     }
// }

// console.log(nearest);

arr = [2, -1, -2, 3];
nmin = -1;
pmin = 1;

for(let n of arr) {
    if(n == nmin || n == pmin) {
        if(n > 0) {
            console.log(n);
            break;
        }
    }
    else {
        nmin--;
        pmin++;
    }
}

// Another way

arr = [-1, -2, 2, 1, 3];
nmin = -1;
pmin = 1;
found = false;

while (!found) {

    // check positive first (priority)
    for (let n of arr) {
        if (n == pmin) {
            console.log(pmin);
            found = true;
            break;
        }
    }

    // check negative only if positive not found
    if (!found) {
        for (let n of arr) {
            if (n == nmin) {
                console.log(nmin);
                found = true;
                break;
            }
        }
    }

    if (!found) {
        nmin--;
        pmin++;
    }
}

