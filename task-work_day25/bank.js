class Bank { // here db is the property of the class
    db = {
        1000: { "acno": 1000, "username": "Neer", "password": 1000, "balance": 5000, transaction: [] },
        1001: { "acno": 1001, "username": "Laisha", "password": 1001, "balance": 5000, transaction: [] },
        1002: { "acno": 1002, "username": "Vyom", "password": 1002, "balance": 3000, transaction: [] },
    }

    // 1. validate function
    validate(acno) {
        return acno in this.db  ;
    }

    // 2. authenticate function
    authenticate(acno, pswd) {
        if (this.validate(acno)) {
            var actualpswd = this.db[acno].password
            if (pswd == actualpswd) {
                console.log("Access granted");

            }
            else {
                console.log("Invalid password");

            }
        }
        else {
            console.log("Invalid AcNo");

        }
    }

    // 3. getBalance function
    getBalance(acno) {
        return this.validate(acno) ? this.db[acno].balance : "Invalid Account Number";
    }

    // 4. fund transfer function
    fundTransfer(fromacno, toacno, amount) {
        // fromacno toacno validate
        if (this.validate(fromacno) && this.validate(toacno)) {
            // fromacno.balance > amount ? allow transfer
            if (this.db[fromacno].balance > amount) {
                this.db[fromacno].balance -= amount;
                this.db[toacno].balance += amount;
                console.log("Transaction completed");

            }
            else {
                console.log("Transfer failed");
                console.log("Insufficient amount");

            }
        }
        else {
            console.log("Transfer error");

        }
    }
}

b1 = new Bank();

console.log(b1.validate(1000)); // true

b1.authenticate(1000,1000);

console.log(b1.getBalance(1001)); // 5000

b1.fundTransfer(1000,1002,3000); // Transaction completed

console.log(b1.getBalance(1000)); // debit

console.log(b1.getBalance(1002)); // credit



