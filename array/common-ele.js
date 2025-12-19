arr1 = [10, 11, 12, 20, 30];
arr2 = [7, 8, 11, 15, 20, 25];

// for(let n of arr1){
//     if(arr2.includes(n)){
//         console.log(n);

//     }
// }
let i = 0;
let j = 0;

while (i < arr1.length && j < arr2.length) {

    if (arr1[i] === arr2[j]) {
        console.log(arr1[i]); // common element
        i++;
        j++;
    }
    else if (arr1[i] > arr2[j]) {
        j++;
    }
    else {
        i++;
    }
}