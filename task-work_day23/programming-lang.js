const programmingLanguages = [
    {
      name: "JavaScript",
      yearCreated: 1995,
      paradigms: ["Imperative", "Functional"],
      popular: true,
      creator: "Brendan Eich",
    },
    {
      name: "Python",
      yearCreated: 1991,
      paradigms: ["Imperative", "Object-oriented", "Functional"],
      popular: true,
      creator: "Guido van Rossum",
    },
    {
      name: "Java",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "James Gosling",
    },
    {
      name: "C++",
      yearCreated: 1983,
      paradigms: ["Object-oriented", "Procedural"],
      popular: true,
      creator: "Bjarne Stroustrup",
    },
    {
      name: "Ruby",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "Yukihiro Matsumoto",
    },
  ];

// 1. Print the names of all programming languages in the array.

nameProgram = programmingLanguages.map(program => program.name);
// console.log(nameProgram);

// 2. Print the total number of programming languages in the array.

numPrograms = programmingLanguages.length;
// console.log(numPrograms);

// 3. Print the languages that are popular.

popularPgms = programmingLanguages.filter(program => program.popular).map(program => program.name);
// console.log(popularPgms);

// 4. Print the names of the languages created after the year 2000.

pgmsAft2000 = programmingLanguages.filter(program => program.yearCreated > 2000).map(program => program.name);
// console.log(pgmsAft2000);

// 5. Print the languages that are both functional and object-oriented.

pgmsFuncObj = programmingLanguages.filter(program => program.paradigms.includes("Functional") && program.paradigms.includes("Object-oriented")).map(program => program.name);
// console.log(pgmsFuncObj);

// 6. Print the names of the creators of the languages.

pgmsCreat = programmingLanguages.map(program => program.creator);
// console.log(pgmsCreat);

// 7. Print the names of languages that have "Script" in their name.

pgmsScript = programmingLanguages.filter(program => program.name.includes("Script")).map(program => program.name);
console.log(pgmsScript);

// 8. Print the names of programming languages that were created before the year 1995.

pgmsBf1995 = programmingLanguages.filter(program =>program.yearCreated < 1995).map(program => program.name);
console.log(pgmsBf1995);

// 9. Print the names of programming languages that support more than two paradigms.

pgmsMoreTwoPara = programmingLanguages.filter(program => program.paradigms.length > 2).map(program => program.name);
console.log(pgmsMoreTwoPara);

// 10. Print the oldest programming language (language with the earliest yearCreated) in the array.

oldPgm = programmingLanguages.reduce((pgm1,pgm2) => pgm1.yearCreated < pgm2.yearCreated ? pgm1 : pgm2).yearCreated;
oldestPgmName = programmingLanguages.filter(program => program.yearCreated == oldPgm).map(program => program.name);
console.log(oldestPgmName);






