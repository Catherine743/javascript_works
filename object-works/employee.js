employeeLeaves = {
  arun: 5,
  sree: 2,
  rahul: 8,
  anju: 4,
  manoj: 10,
  divya: 1,
  akhil: 6,
  neethu: 3
}

// leave count of manoj

// console.log(employeeLeaves["manoj"]);

// all employee names

// for(let name in employeeLeaves){
//     console.log(name);
    
// }

// all leave counts

// for(let name in employeeLeaves){
//     console.log(employeeLeaves[name]);
    
// }

// total number of employees

totalEmp = Object.entries(employeeLeaves).length
console.log(totalEmp);

// Check whether akhil exists

if("akhil" in employeeLeaves){
    console.log("Akhil exists");
    
}
else{
    console.log("Akhil not exists");
    
}

// Add a new employee vishnu with 7 leave days

employeeLeaves.vishnu = 7;
// console.log(employeeLeaves);

// Update anju's leave count to 5

employeeLeaves.anju = 5;
// console.log(employeeLeaves);

// Remove divya from the object

delete employeeLeaves.divya
console.log(employeeLeaves);

// Convert employee names to upper case and print

upperNames = Object.keys(employeeLeaves).map(names => names.toUpperCase());
console.log(upperNames);


