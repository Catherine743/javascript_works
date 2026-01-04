function outerFunction() {
    let message = "Hello World";
    function innerFunction() {
        console.log(message); 
    }

    innerFunction();
}

outerFunction();
