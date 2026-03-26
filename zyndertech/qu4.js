function stringLengths(arr) {
  const result = {};

  arr.forEach(str => {
    result[str] = str.length;
  });

  return result;
}

// Example
console.log(stringLengths(["apple", "bat", "cat"]));