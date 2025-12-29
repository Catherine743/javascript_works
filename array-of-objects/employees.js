employees =[
    {empID : 1, empName : "Jacob", designation : "Software Developer", workExp : "3 years", salary : 25000},
    {empID : 2, empName : "Augustine", designation : "Software Testing", workExp : "1 year", salary : 30000},
    {empID : 3, empName : "David", designation : "UI / UX", workExp : "5 years", salary : 40000},
    {empID : 4, empName : "Sandy", designation : "Marketing", workExp : "2 years", salary : 15000},
    {empID : 5, empName : "Irene", designation : "Software Developer", workExp : "10 years", salary : 80000},
]

// display employee names
employNames = employees.map(emp => emp.empName)
console.log(employNames);

// display names whose designation is software-developer

nameDeveloper = employees.filter(emp => emp.designation == "Software Developer").map(emp => [emp.empName,emp.designation])
console.log(nameDeveloper);

// display names salary > 50000

nameSalary = employees.filter(emp => emp.salary > 50000)
console.log(nameSalary);

//sort based on salary

sortSalary = employees.sort((e1,e2) => e2.salary - e1.salary).map(emp => [emp.empName,emp.salary])
console.log(sortSalary)

// highest salary
                                     //object of highest total          // return attribute of that object 
maxSalary = employees.reduce((e1,e2) => e1.salary > e2.salary? e1 : e2).salary
maxSalaryEmp = employees.filter(emp => emp.salary == maxSalary).map(emp => [emp.empName,emp.salary])
console.log(maxSalaryEmp);

// Lowest salary

minSalary = employees.reduce((e1,e2) => e1.salary < e2.salary? e1 : e2).salary
minSalaryEmp = employees.filter(emp => emp.salary == minSalary).map(emp => [emp.empName,emp.salary])
console.log(minSalaryEmp);

// map method can be used only in the output array which is in filter
// map and filter -> return array

// method chain -> used when return array
// map method can be used when input is array because filter method is used for the input of map
// map method can be used in sort()