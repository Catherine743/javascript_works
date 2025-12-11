for (let r = 5; r >= 1; r--) {
    let pattern = "";

    // Add spaces before stars
    for (let s = 1; s <= 5 - r; s++) {
        pattern += "\t";  // tab for spacing
    }

    // Add stars
    for (let c = 1; c <= r; c++) {
        pattern += "*\t";
    }

    console.log(pattern);
}