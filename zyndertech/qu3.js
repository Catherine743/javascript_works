function groupAnagrams(arr) {
  const map = {};

  arr.forEach(word => {
    const key = word.split('').sort().join('');
    if (!map[key]) map[key] = [];
    map[key].push(word);
  });

  return Object.values(map);
}

// Example
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));