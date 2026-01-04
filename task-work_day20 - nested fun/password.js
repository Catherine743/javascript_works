function password(pswd) {
    function length() {
        return pswd.length >= 8;
    }
    function char() {
        chars = /[^a-zA-Z0-9]/
        return chars.test(pswd);
    }

    if (length() && char()) {
        return "Password is valid";
    } else {
        return "Password is invalid";
    }
}

console.log(password("Hello@123")); 
console.log(password("hello123"));  
