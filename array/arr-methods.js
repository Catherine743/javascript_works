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
-> includes(value) => whather the value exists in the array or not

// extracting a portion
slice(startIndex,endIndex)
splice() => add,remove

map()
filter()
reduce()
some()
forEach()
find()
sort()
*/

var foods = ["dosa", "chapathi", "fried rice","dosa", "coffee", "meals" ]
console.log(foods);


// pushFun = foods.push("mandhi");
// console.log(foods);

// popFun = foods.pop();
// console.log(foods);

// unshiftFun = foods.unshift("tea");
// console.log(foods);

shiftFun = foods.shift();
console.log(foods);

let pos = foods.indexOf("fried rice")
console.log(pos);

let isExist = foods.includes("fried rice")
console.log(isExist);

var portion = foods.slice(0,3); // returns values from index 0 to 2 
console.log(portion);


