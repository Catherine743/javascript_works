// Constructor

// instance initialization - Default method(no need to create a new function)
// first execute this methods then user defined methods execute
class Student {
    constructor(rollno, name, grade, total) {
        this.idNo = rollno;
        this.studName = name;
        this.studGrade = grade;
        this.studTotal = total;
    }

    printDetails() {// user-defined function
        console.log(this.idNo, this.studName, this.studGrade, this.studTotal);

    }
}

s1 = new Student(1, "Amar", 8, 450); // after object creation, constructor invokes automatically
s1.printDetails();