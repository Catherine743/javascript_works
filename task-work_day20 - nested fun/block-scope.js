function outerFunction() {
    let outerVar = "Outer function";

    function innerFunction() {
        let innerVar = "Inner function";

        console.log(outerVar); // Accessible
        console.log(innerVar); // Accessible
    }

    innerFunction();

    // console.log(innerVar); // Error: innerVar is not defined
}

outerFunction();
