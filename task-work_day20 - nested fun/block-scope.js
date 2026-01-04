function outerFunction() {
    let outerVar = "Outer function";

    function innerFunction() {
        let innerVar = "Inner function";

        console.log(outerVar); 
        console.log(innerVar); 
    }

    innerFunction();

    // console.log(innerVar); // Error: innerVar is not defined
}

outerFunction();
