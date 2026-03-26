let nums = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;

for (let i = 0; i < nums.length; i += 2) { // even index
    if (nums[i] % 2 !== 0) { // odd number
        sum += nums[i];
    }
}

console.log("Sum:", sum);