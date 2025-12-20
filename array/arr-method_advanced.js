var numbers = [10,11,12,13,14,15,16,2,3];

// map

//addFive

// addFive = numbers.map(n => n + 5);
// console.log(addFive);

// //squares

// squares = numbers.map(n => n ** 2);
// console.log(squares);

// //cubes

// cubes = numbers.map(n => n ** 3);
// console.log(cube);


// filter

// // Greater than 13
// numGtThirteen = numbers.filter(n => n > 13);
// console.log(numGtThirteen);

// // Evens

// evens = numbers.filter(n => n % 2 == 0);
// console.log(evens);

// // Odds

// odds = numbers.filter(n => n % 2 != 0);
// console.log(odds);

// var words = ["thoughtful", "meaningful", "beautiful", "wonderful", "housefull"]

// // uppercase
// upperWords = words.map(w => w.toUpperCase());
// console.log(upperWords);

// // words ending with ful

// endingWithFul = words.filter(w => w.endsWith("ful"));
// console.log(endingWithFul);

// reduce

// // maximum number
// maxNum = numbers.reduce((n1,n2) => n1 > n2? n1 : n2);
// console.log(maxNum);

// // minimum number
// minNum = numbers.reduce((n1,n2) => n1 < n2? n1 : n2);
// console.log(minNum);

// // Sum of numbers
// total = numbers .reduce((n1,n2) => n1 + n2);
// console.log(total);

// sort

// numbers.sort((n1,n2) => n1-n2) // n1-n2 => if n1 < n2, n1 first, then n2 (ascending)
// console.log(numbers);

// numbers.sort((n1,n2) => n2-n1);// n2-n1 => if n1 < n2, n2 first, then n1 (descending)
// console.log(numbers);

// map

words = ["carrot", "parrot", "beetroot", "apple"]

// length of each word
wordLength = words.map(w => w.length);
console.log(wordLength);

// uppercase of each word

wordUpper = words.map(w => w.toUpperCase())
console.log(wordUpper);

// "rr" words of each string
wordRR = words.filter(w => w.includes("rr")) // includes method in string and array
console.log(wordRR);

// Longest word
longestWord = words.reduce((w1,w2) => w1.length < w2.length? w2 : w1);
console.log(longestWord);

// sort the array by the length

words.sort((w1,w2) =>  w1.length - w2.length );
console.log(words);










