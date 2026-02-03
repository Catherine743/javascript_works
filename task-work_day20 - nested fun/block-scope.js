function outerFunction() {
    outerVar = "Outer function";

    function innerFunction() {
        innerVar = "Inner function";

        console.log(outerVar); 
        console.log(innerVar); 
    }

    innerFunction();

    // console.log(innerVar); // Error: innerVar is not defined
}

outerFunction();
