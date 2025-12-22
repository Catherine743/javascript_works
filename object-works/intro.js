var Car = {
    name : "Vagonar",
    cc : 1000,
    "fuel-type" : "petrol",
    price : "4,00,000",
    color : "Brown",
}

// console.log(Car.name);
// console.log(Car["fuel-type"]);

var Student = {
    "roll-no" : 43,
    name : "Anu",
    course : "Software testing",
    email : "anu@gmail.com",
    gender : "female"
}

// console.log(Student["roll-no"]);
// console.log(Student["email"]);
// console.log(Student.email);

// Student.college = "vidya";
// Student["pass-out-year"] = 2025;
// console.log(Student);

var product = {
    code : 144,
    title : "Handbag",
    price : 5000,
    color : "Brown",

}

// check whether attr is exist or not

// if("offer" in product){
//     console.log("Exists");
    
// }
// else{
//     console.log("Not exists");
    
// }

// product.price += 2000;
// console.log(product);

if ("quantity" in product){
    product.quantity += 10;
}
else{
    product.quantity = 10;
}

console.log(product);



