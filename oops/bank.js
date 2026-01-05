class Bank {
    createAccount(accountNo,custom_name,accountType,bal){
        this.acno = accountNo;
        this.customer_name = custom_name;
        this.acc_type = accountType;
        this.balance = bal;
    }
    deposit(amount){
        this.balance += amount;
        console.log(`${this.customer_name} has been credited with amt ${amount}. Your avail bal is ${this.balance}`);
        
    }
    withdraw(amount){
        if(amount > this.balance){
            console.log("Insufficient balance");
            console.log("Transaction cancelled");
            
        }
        else{
            this.balance -= amount;
            console.log(`${this.customer_name} has been debited with amt ${amount}. Your avail bal is ${this.balance}`);
            
        }
        
    }
    balEnq(){
        console.log(`Your avail bal is ${this.balance}`);
        
    }
}

var anuInstance = new Bank();

anuInstance.createAccount(234,"Anu","Savings Account",50000);
anuInstance.deposit(30000);
anuInstance.withdraw(40000)