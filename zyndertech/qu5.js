function firstGreaterKey(obj) {
  keys = Object.keys(obj);

  for (i = 1; i < keys.length; i++) {
    if (obj[keys[i]] > obj[keys[i - 1]]) {
      return keys[i];
    }
  }

  return null;
}

// Example
console.log(firstGreaterKey({ P: 12, Q: 8, R: 15, S: 10, T: 20 }));