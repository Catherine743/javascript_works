// 1. create an object person  with properties name, age and city

person = {
    name : "Anu",
    age : 25,
    city : "Thrissur"
}

// 2. Access the age property

console.log("Age :",person.age);

// 3. Access the city property

console.log("City :",person["city"]);

// // 4. Add property email

// person.email = "anu123@gmail.com";
// console.log(person);

// // 5. Update the value of a property

// person.city = "Ernakulam";
// console.log(person);

// // 6. delete age property

// delete person.age;
// console.log(person);

// // 7. check phone exists

// console.log("phone" in person? "Phone exists" : "Phone does not exists");

// // 8. Iterate all properties using for..in 

// for(let data in person){
//     console.log(data,":",person[data]);
    
// }

// // 9. Count the number of properties

// console.log("Number of properties :",Object.keys(person).length);

// // 10. Convert object into array of keys

// console.log(Object.keys(person));

// // 11. Convert object into array of values

// console.log(Object.values(person));

// // 12. Convert object into key-value pairs

// console.log(Object.entries(person));

// // 13. Create an empty object and add properties 

// job = {};

// job.id = 30;
// job.designation = "Web developer";
// job.location = "Trivandrum"

// console.log(job);

// // 14. compare 2 objects for equality

// console.log(person == job);

// 15. Nest one object inside another object

employee = {
  designation : "Web Developer",
  address: {
    location : "Kozhikode",
    pincode: 673001
  }
};
// console.log(employee);

// // 16. display all keys using Object.keys()

// console.log(Object.keys(employee));

// // 17. display all values using Object.values()

// console.log(Object.values(employee));

// // 18. loop through keys and values

// for (let [key, value] of Object.entries(employee)) {
//   console.log(key,":", value);
// }

// // 19. Copy one object into another using Object.assign()

// employeeCopy = Object.assign({},employee)
// console.log(employeeCopy);

// // 20. Merge 2 objects using Object.assign()

mergeObj = Object.assign({},person,employee)
// console.log(mergeObj);

// // 21. Merge 2 objects using the spread operator {...}

mergedSprd = { ...person, ...employee };
// console.log(mergedSprd);

// 22. Freeze an object using Object.freeze()

Object.freeze(mergeObj);

// 23. Check whether an object is frozen

console.log(Object.isFrozen(mergeObj));

// 24. Prevent adding new properties using Object.seal().

Object.seal(mergedSprd);

// 25. Check whether an object is sealed

console.log(Object.isSealed(mergedSprd));

// 26. Difference between Object.freeze() and Object.seal()

// Feature             | Object.freeze() | Object.seal()

// "Add properties"    |  No             | No
// "Delete properties" |  No             | No
// "Modify values"     |  No             | Yes 

// 27. Create a method inside an object and call it

user = {
  name: "Anju",
  greet: function () {
    console.log("Hello");
  }
};

user.greet();

// 28. Use 'this' keyword insde an object method

let user2 = {
  name: "Anju",
  greet() {
    console.log("Hello " + this.name);
  }
};

user2.greet();

// 29. Create an object with multiple methods

calc = {
  add(a, b) { return a + b; },
  sub(a, b) { return a - b; }
};
console.log(calc);

// 30. Convert an object into a JSON string

jsonStr = JSON.stringify(employee);
console.log(jsonStr);

// 31. Find the sum of all numeric values in an object

data = { a: 10, b: 20, c: "hi" };

let sum = 0;
for (let key in data) {
  if (typeof data[key] == "number") {
    sum += data[key];
  }
}
console.log("Sum of numbers is",sum);

// 32. Remove all properties with null or undefined values.

data2 = { a: 1, b: null, c: undefined };

for (let key in data2) {
  if (data2[key] == null) {
    delete data2[key];
  }
}
console.log(data2);

// 33. Clone an object without affecting the original object

clonePerson = { ...person };
console.log(clonePerson);

// 34. Check if an object is empty

emptyObj = {};
console.log(Object.keys(emptyObj).length == 0);

// 35. Sort object properties by values

scores = { a: 30, b: 10, c: 20 };
sortScores = Object.entries(scores).sort((s1,s2) => s1[1] - s2[1])
console.log(sortScores);

// 36. Find the key with the highest value in an object

let maxKey = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
console.log(maxKey);

// 37. Convert an object into array and vice-versa

arr = Object.entries(scores);
console.log(arr);

objFromArr = Object.fromEntries(arr);
console.log(objFromArr);

// 38. Count the number of times each character appears in a string using an object

let str = "hello";
let count = {};

for (let ch of str) {
  count[ch] = (count[ch] || 0) + 1;
}

console.log(count);

// 39. Create a student object and calculate total and average marks using methods

let student = {
  marks: [80, 70, 90],
  total() {
    return this.marks.reduce((a, b) => a + b, 0);
  },
  average() {
    return this.total() / this.marks.length;
  }
};

console.log("Total :",student.total(), ",", "Average :", student.average());

// 40. Destructuring

let { name, city } = person;

// 41. Rename property using destructuring

let { name: fullName } = person;

// 42. Loop through an object and print only string values

for (let key in person) {
  if (typeof person[key] == "string") {
    console.log(person[key]);
  }
}

// 43. Function that accepts an object and print only string values

function getNumbers(obj) {
  let res = {};
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      res[key] = obj[key];
    }
  }
  return res;
}

console.log(getNumbers(person));

// 44. Convert nested objects into a flat object

let nested = { a: 1, b: { c: 2 } };
let flat = { ...nested, ...nested.b };
delete flat.b;

console.log(flat);

// 45. Compare 2 objects and find common properties

let objA = { a: 1, b: 2 };
let objB = { b: 2, c: 3 };

let common = {};

for (let key in objA) {
  if (key in objB) {
    common[key] = objA[key];
  }
}

console.log(common);





























