/*
array methods

-> length
-> push(value), add value at end of array
-> pop(), remove value from end of array
-> unshift(value) -> insert value at the start
-> shift() -> remove  value at the start

//search
-> indexOf(value) => returns the index of the first occurrence of a value in an array
-> lastindexOf(value) => reurns the index of the last occurrence of a value in an array
-> includes(value) => whather the value exists in thae array or not
*/

var foods = ["dosa", "chapathi", "fried rice"]
console.log(foods);


// pushFun = foods.push("mandhi");
// console.log(foods);

popFun = foods.pop();
console.log(foods);

// unshiftFun = foods.unshift("tea");
// console.log(foods);

shiftFun = foods.shift();
console.log(foods);


let pos = foods.indexOf("fried rice")
console.log(pos);
