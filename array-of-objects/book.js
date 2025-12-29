var books = [
  {
    id: 1,
    title: "Aadujeevitham (Goat Days)",
    author: "Benyamin",
    price: 350,
    genre: "Contemporary Fiction",
    language: "Malayalam"
  },
  {
    id: 2,
    title: "Indulekha",
    author: "O. Chandu Menon",
    price: 250,
    genre: "Classic Novel",
    language: "Malayalam"
  },
  {
    id: 3,
    title: "The God of Small Things",
    author: "Arundhati Roy",
    price: 499,
    genre: "Literary Fiction",
    language: "English"
  },
  {
    id: 4,
    title: "Khasakkinte Ithihasam",
    author: "O. V. Vijayan",
    price: 320,
    genre: "Magical Realism",
    language: "Malayalam"
  },
  {
    id: 5,
    title: "Atomic Habits",
    author: "James Clear",
    price: 550,
    genre: "Self-Help",
    language: "English"
  },
  {
    id: 6,
    title: "Balyakalasakhi",
    author: "Vaikom Muhammad Basheer",
    price: 180,
    genre: "Romance/Tragedy",
    language: "Malayalam"
  },
  {
    id: 7,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 399,
    genre: "Classic Fiction",
    language: "English"
  },
  {
    id: 8,
    title: "Chemmeen",
    author: "Thakazhi Sivasankara Pillai",
    price: 290,
    genre: "Social Realism",
    language: "Malayalam"
  },
  {
    id: 9,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 650,
    genre: "Non-Fiction/History",
    language: "English"
  },
  {
    id: 10,
    title: "Manjaveyil Maranangal",
    author: "Benyamin",
    price: 420,
    genre: "Mystery/Thriller",
    language: "Malayalam"
  }
];

// Print the title of given books
allTitles = books.map(b => b.title)
console.log(allTitles);

// print the book which is in malayalam
malaBook = books.filter(b => b.language == "Malayalam").map(b => [b.title,b.author])
console.log(malaBook);

// Costly Book
                                                     // object
maxBook = books.sort((b1,b2) => b2.price - b1.price)[0].price
costlyBook = books.filter(b => b.price == maxBook).map(b => [b.title,b.price])
console.log(costlyBook);

// cheap book

minBook = books.reduce((b1,b2) => b1.price < b2.price? b1 : b2).price;
cheapBook = books.filter(b => b.price == minBook).map(b => [b.title,b.price])
console.log(cheapBook);

// display books greater than 500

booksGt500 = books.filter(b => b.price > 500).map(b => [b.title,b.price]);
console.log(booksGt500);

// display the names of english authors

englishAuthors = books.filter(b => b.language == "English").map(b => b.author)
console.log(englishAuthors);

// Retrieve the name of the books by Benyamin

bookAuthor = books.filter(b => b.author == "Benyamin").map(b => [b.title,b.genre])
console.log(bookAuthor);

//Retrieve the genre of book "Khasakkinte Ithihasam"

bookGenre = books.filter(b => b.title == "Khasakkinte Ithihasam").map(b => b.genre)
console.log(bookGenre);

// Retrieve the name of the book whose genre is Mystery/Thriller

bookMyThrill = books.filter(b => b.genre == "Mystery/Thriller").map(b => b.title)
console.log(bookMyThrill);

// Retrieve the number of books in the given object

numBooks = books.length;
console.log(`Number of books is ${numBooks}`);




