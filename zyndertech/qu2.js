function frequencyWithIndices(arr) {
  const result = {};

  arr.forEach((item, index) => {
    if (!result[item]) {
      result[item] = { count: 0, indices: [] };
    }
    result[item].count++;
    result[item].indices.push(index);
  });

  return result;
}

// Example
console.log(frequencyWithIndices(["apple", "banana", "apple", "orange", "banana", "apple"]));