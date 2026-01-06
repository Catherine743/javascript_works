arr = [10, 50, 90, 100, 51];
isSorted = true;

for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        isSorted = false
        break;
    }
}

if (!isSorted) {
    console.log(`Array is not sorted`);
}
else {
    console.log(`Array is sorted`);

}
