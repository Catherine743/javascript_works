function calculate(n) {

    function square() {
        return n ** 2;
    }

    function cube() {
        return n ** 3;
    }

    console.log("Square:", square());
    console.log("Cube:", cube());
}

calculate(5);

