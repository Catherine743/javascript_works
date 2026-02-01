var movies = [
  {
    id: 1,
    title: "Drishyam",
    director: "Jeethu Joseph",
    price: 250,
    genre: "Thriller",
    language: "Malayalam"
  },
  {
    id: 2,
    title: "Premam",
    director: "Alphonse Puthren",
    price: 200,
    genre: "Romance",
    language: "Malayalam"
  },
  {
    id: 3,
    title: "Inception",
    director: "Christopher Nolan",
    price: 450,
    genre: "Science Fiction",
    language: "English"
  },
  {
    id: 4,
    title: "Interstellar",
    director: "Christopher Nolan",
    price: 500,
    genre: "Sci-Fi/Drama",
    language: "English"
  },
  {
    id: 5,
    title: "Bangalore Days",
    director: "Anjali Menon",
    price: 300,
    genre: "Drama",
    language: "Malayalam"
  },
  {
    id: 6,
    title: "Lucifer",
    director: "Prithviraj Sukumaran",
    price: 350,
    genre: "Action/Thriller",
    language: "Malayalam"
  },
  {
    id: 7,
    title: "Charlie",
    director: "Martin Prakkat",
    price: 280,
    genre: "Romance/Drama",
    language: "Malayalam"
  },
  {
    id: 8,
    title: "Joker",
    director: "Todd Phillips",
    price: 420,
    genre: "Psychological Thriller",
    language: "English"
  },
  {
    id: 9,
    title: "Avengers: Endgame",
    director: "Anthony Russo, Joe Russo",
    price: 550,
    genre: "Action/Fantasy",
    language: "English"
  },
  {
    id: 10,
    title: "KGF: Chapter 1",
    director: "Prashanth Neel",
    price: 380,
    genre: "Action",
    language: "Kannada"
  },
  {
    id: 11,
    title: "Bahubali: The Beginning",
    director: "S. S. Rajamouli",
    price: 480,
    genre: "Epic/Fantasy",
    language: "Telugu"
  },
  {
    id: 12,
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    price: 400,
    genre: "Drama",
    language: "English"
  },
  {
    id: 13,
    title: "Titanic",
    director: "James Cameron",
    price: 370,
    genre: "Romance/Drama",
    language: "English"
  },
  {
    id: 14,
    title: "Uyare",
    director: "Manu Ashokan",
    price: 260,
    genre: "Drama",
    language: "Malayalam"
  },
  {
    id: 15,
    title: "Minnal Murali",
    director: "Basil Joseph",
    price: 320,
    genre: "Superhero/Fantasy",
    language: "Malayalam"
  }
];

// display all movie titles using map()

allTitles = movies.map(m => m.title);
console.log(allTitles);

// all movies which is in malayalam

malaMovie = movies.filter(m => m.language == "Malayalam").map(m => m.title);
console.log(malaMovie);

// all movies with a price greater than 300

movieGt300 = movies.filter(m => m.price > 300).map(m => [m.title,m.price]);
console.log(movieGt300);

// display title and director of all english movies

movieEng = movies.filter(m => m.language == "English").map(m => [m.title,m.director]);
console.log(movieEng);

// total price

total = movies.reduce((sum,m) => sum + m.price ,0);
console.log(`Total price is ${total}`);

// average price

avg = Math.round(total / movies.length);
console.log(`Average price is ${avg}`);

// movie with the highest price

priceMax = movies.reduce((m1,m2) => m1.price > m2.price? m1 : m2).price;
movMax = movies.filter(m => m.price == priceMax).map(m => [m.title,m.price]);
console.log(`Movie with the highest price is ${movMax}`);

// movie with the lowest price

priceMin = movies.reduce((m1,m2) => m1.price < m2.price? m1 : m2).price;
movMin = movies.filter(m => m.price == priceMin).map(m => [m.title,m.price]);
console.log(`Movie with the highest price is ${movMin}`);

// all movies directed by Christopher Nolan

movChrist = movies.filter(m => m.director == "Christopher Nolan").map(m => m.title);
console.log("Movies directed by Christopher Nolan is" ,movChrist);

// count of malayalam and english movies

countEng = movies.filter(m => m.language == "English").length;
countMal = movies.filter(m => m.language == "Malayalam").length;
console.log(`Count of malayalam and english movies is ${countMal} and ${countEng}`);

// sort the movies by price in ascending order

sortPrice = movies.sort((m1,m2) => m1.price - m2.price).map(m => [m.title,m.price])
console.log(sortPrice);

// sort the movies by title in alphabetical order

movAlpha = movies.sort((m1,m2) => m1.title.localeCompare(m2.title)).map(m => m.title);
console.log(movAlpha);

// first movie that belongs to the genre "Thriller"

movThrill = movies.filter(m => m.genre == "Thriller").map(m => m.title)[0];
console.log(movThrill);

// create a new array containing only movie titles and prices

movie_Price = movies.map(m => [m.title, m.price]);
console.log(movie_Price);

// movie_Price = movies.map(m => ({title : m.title, price : m.price}));
// console.log(movie_Price);

// Check whether any movie price is below 200 (use some())

isBelow200 = movies.some(movie => movie.price < 200);
console.log(isBelow200);





