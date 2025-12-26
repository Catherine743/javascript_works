student = {
    name : "Rachel",
    age : 20,
    course : "Mearn Stack",
    phoneNo : 9445672341
}

console.log(student.name);

student.email = "rachel@gmail.com"
console.log(student);

student.age += 5;
console.log(student);

if("address" in student){
    console.log("Address exists");
    
}
else{
    console.log("Address not exists");
    
}

count = Object.keys(student).length;
console.log(count);

console.log(Object.keys(student));

console.log(Object.values(student));

delete student.phoneNo;
console.log(student);

for(let key in student){
    console.log(key,":",student[key]);
    
}










