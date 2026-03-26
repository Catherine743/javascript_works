function rotateMatrix(matrix) {
  const n = matrix.length;

  // Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Reverse each row
  for (let row of matrix) {
    row.reverse();
  }

  return matrix;
}

// Example
console.log(rotateMatrix([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]));