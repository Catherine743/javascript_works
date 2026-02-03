function outerFunction() {
    message = "Hello World";
    function innerFunction() {
        console.log(message); 
    }

    innerFunction();
}

outerFunction();
