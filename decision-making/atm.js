var dbPin = 2121;
var dbBalance = 45000;
var userPin = 2121;
var amount = 2350;

if (userPin == dbPin){ // dbPin == userPin =>true
    if(amount % 100 == 0){ // 2350 % 100 == 0 =>false
        if (amount <= dbBalance){
            console.log("Withdrawal Successful");
            
        }
        else{
            console.log("Insufficient balance");
            
        }
    }
    else{
        console.log("Enter multiple of 100"); // print this
        
    }
}
else{
    console.log("Incorrect PIN");
    
}