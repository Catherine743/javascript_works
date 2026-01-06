arr = [1, 2, 5, 3, 4];
isUnique = true;

for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            isUnique = false;
            break;
        }
    }
    if (!isUnique) break;
}

if (isUnique) {
    console.log("All elements are unique");
} else {
    console.log("Elements are not unique");
}
