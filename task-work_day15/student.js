// Create an object named 'student' with properties: name, age, and course

student = {
    name : "Rachel",
    age : 20,
    course : "Mearn Stack",
    phoneNo : 9445672341
}

// Display the name property
console.log(student.name);

// Add a new property 'email' 
student.email = "rachel@gmail.com"
console.log(student);

// Update the age value
student.age += 5;
console.log(student);

// Check if the property 'address' exists
if("address" in student){
    console.log("Address exists");
    
}
else{
    console.log("Address not exists");
    
}

// Count the total number of properties
count = Object.keys(student).length;
console.log(count);

// Display all keys
console.log(Object.keys(student));

// Display all values
console.log(Object.values(student));

//Delete the phone number
delete student.phoneNo;
console.log(student);

// Loop through an object and display key-value pairs
for(let key in student){
    console.log(key,":",student[key]);
    
}










