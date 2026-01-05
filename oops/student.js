class Student{
    setStudent(name,id,branch,year){ // method to initialize attribute
        this.name = name;
        this.id = id;
        this.branch = branch;
        this.year = year;
    }
    display(){
        console.log(this.name,this.id,this.branch,this.year);
        
    }
}

var anuInstance = new Student();

anuInstance.setStudent("Anu",30,"CSE",2019);
anuInstance.display();
