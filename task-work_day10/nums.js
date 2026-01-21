var numbers = [2, 3, 4, 5, 6, 7, 7, 8, 3, 9, 9, 7, 9];

// min = numbers[0];
// for(let n of numbers){
//     if(min > n){
//         min = n;
//     }
// }

// console.log(`Minimum number is ${min}`);
//

// max = 0;
// for(let n of numbers){
//     if(max < n){
//         max = n;
//     }
// }

// console.log(`Maximum number is ${max}`);
//

// sum = 0;
// for(let n of numbers){
//     sum = sum +n;
// }

// console.log(`Sum of numbers is ${sum}`);
//

// oddSum = 0;

// for(let n of numbers){
//     if (n % 2 != 0){
//         oddSum = oddSum +n
//     }
// }

// console.log(`Sum of odd numbers is ${oddSum}`);
//

// evenSum = 0;

// for(let n of numbers){
//     if(n % 2 == 0){
//         evenSum = evenSum + n;
//     }
// }

// console.log(`Sum of even numbers is ${evenSum}`);
//

// for(let n of numbers){
//     if(n % 3 == 0){
//         console.log(n); 
//     }
// }
//

// sum = 0;
// count = 0;

// for(let n of numbers){
//     sum = sum + n;
//     count++;
// }

// avg = sum / count;

// console.log(avg.toFixed(2));
//



let result = [];
let used = [];
i = 0; 
let num;
newRes = "";

for (let n of numbers) {
    let found = false;

    for (let i = 0; i < result.length; i++) {
        if (n === result[i]) {
            used[i]++;          // increase count
            found = true;
            break;
        }
    }

    if (!found) {
        result[i] = n;
        used[i] = 1; 
        i++;         // initial count
    }
}

// find most frequent -> if there is only one element
// let max = used[0];
// num = result[0];

// for (let i = 1; i < used.length; i++) {
//     if (used[i] > max) {
//         max = used[i];
//         num = result[i];
//     }
// }

for(i = 0; i < used.length; i++) {
    if(max == used[i]) {
        if(newRes == "") {
            newRes = result[i];

        }
        else {
            newRes = newRes + ", " + result[i];
        }
        
    }
}
console.log("Most frequent number:", newRes);
console.log("Frequency:", max);





