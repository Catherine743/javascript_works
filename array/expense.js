expenses = [22000, 21000, 15000, 19000, 24000, 11000, 13000, 27000, 25000, 27000, 30000];

// console.log("Iterating array using index");
// for (let i = 0; i < expenses.length; i++) {
//     console.log(expenses[i]);

// }
// console.log("Iterating array using of");
// for (let e of expenses) {
//     console.log(e);

// }

// total = 0;

// for (let e of expenses) {
//     total += e;
// }

// console.log(`Total expenses => ${total}`);

// max = 0;

// for (let e of expenses) {
//     if (max < e) {
//         max = e;
//     }
// }

// console.log(`Costly expense is ${max}`);


min = expenses[0];

for (let e of expenses) {
    if (min > e) {
        min = e;
    }
}

console.log(`Minimum expense is ${min}`);