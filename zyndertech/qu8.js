function multiLevelDict(arr) {
  const result = {};

  arr.forEach(([country, state, city]) => {
    if (!result[country]) result[country] = {};
    if (!result[country][state]) result[country][state] = [];

    result[country][state].push(city);
  });

  return result;
}

// Example
console.log(multiLevelDict([
  ["India", "Kerala", "Kochi"],
  ["India", "Tamil Nadu", "Chennai"],
  ["USA", "California", "LA"]
]));