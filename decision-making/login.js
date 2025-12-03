var dbPassword = "Password@123";
var dbOtp = 4556;
var userPassword = "Password@123";
var userOtp = 4548;

if (userPassword == dbPassword){ // Password@123 == Password@123 =>true
    if(userOtp == dbOtp){ // 4556 == 4548 =>false
        console.log("Login Successful");
        
    }
    else{
        console.log("Incorrect OTP"); // print this
        
    }
}
else{
    console.log("Incorrect password");
    
}