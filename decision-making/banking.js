var dbPin = 2121;
var dbBalance = 45000;
var userPin = 2121;
var amount = 2300;

if (userPin == dbPin){ // 2121 == 2121 => true
    if(amount <= dbBalance){ // 2300 <= 45000 =>true
        console.log("Withdrawal successful"); // print this
        
    }
    else{
        console.log("Insufficient balance");
        
    }
}
else{
    console.log("Incorrect PIN");
    
}