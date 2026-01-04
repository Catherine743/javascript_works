function calculate(a,b,choice){
    function add(){
        return a + b; 
    }
    function sub(){
        return a - b; 
    }
    function multiply(){
        return a * b; 
    }

    if (choice == 'add'){
        return add();
    }
    else if (choice == 'sub'){
        return sub();
    }
    else if (choice == 'mul'){
        return multiply();
    }
    else{
        console.log("Invalid choice");
        
    }
}

console.log(calculate(3,5,'mul'));
