function managerMap(pairs) {
  const result = {};

  pairs.forEach(([emp, manager]) => {
    if (!result[manager]) result[manager] = [];
    result[manager].push(emp);
  });

  return result;
}

// Example
console.log(managerMap([
  ["Alice", "Bob"],
  ["Charlie", "Bob"],
  ["Bob", "Diana"]
]));