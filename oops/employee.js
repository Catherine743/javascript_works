class Employee {
    setEmployee(id,name,designation,salary){
        this.empID = id;
        this.empName = name;
        this.empDesignation = designation;
        this.empSalary = salary;
    }
    displayEmployee(){
        console.log(this.empID,this.empName,this.empDesignation,this.empSalary);
        
    }

}

emp1Instance = new Employee();
emp1Instance.setEmployee(200,"Varun","Developer",30000);
emp1Instance.displayEmployee();

emp2Instance = new Employee();
emp2Instance.setEmployee(201,"Roy","Testing",50000);
emp2Instance.displayEmployee();