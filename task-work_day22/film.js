const films = [
    {
        id: 1,
        name: "Inception",
        category: "Sci-Fi",
        language: "English",
        yearOfRelease: 2010,
        status: "Hit",
        actors: [
            { name: "Leonardo DiCaprio", role: "Cobb" },
            { name: "Joseph Gordon-Levitt", role: "Arthur" }
        ]
    },
    {
        id: 2,
        name: "Titanic",
        category: "Romance",
        language: "English",
        yearOfRelease: 1997,
        status: "Hit",
        actors: [
            { name: "Leonardo DiCaprio", role: "Jack" },
            { name: "Kate Winslet", role: "Rose" }
        ]
    },
    {
        id: 3,
        name: "Avatar",
        category: "Fantasy",
        language: "English",
        yearOfRelease: 2009,
        status: "Hit",
        actors: [
            { name: "Sam Worthington", role: "Jake" },
            { name: "Zoe Saldana", role: "Neytiri" }
        ]
    },
    {
        id: 4,
        name: "Joker",
        category: "Drama",
        language: "English",
        yearOfRelease: 2019,
        status: "Hit",
        actors: [
            { name: "Joaquin Phoenix", role: "Joker" }
        ]
    },
    {
        id: 5,
        name: "Interstellar",
        category: "Sci-Fi",
        language: "English",
        yearOfRelease: 2014,
        status: "Hit",
        actors: [
            { name: "Matthew McConaughey", role: "Cooper" },
            { name: "Anne Hathaway", role: "Brand" }
        ]
    },

    {
        id: 6,
        name: "Bahubali",
        category: "Historical",
        language: "Telugu",
        yearOfRelease: 2015,
        status: "Hit",
        actors: [
            { name: "Prabhas", role: "Bahubali" },
            { name: "Rana Daggubati", role: "Bhallaladeva" }
        ]
    },
    {
        id: 7,
        name: "RRR",
        category: "Action",
        language: "Telugu",
        yearOfRelease: 2022,
        status: "Hit",
        actors: [
            { name: "Ram Charan", role: "Alluri" },
            { name: "Jr NTR", role: "Bheem" }
        ]
    },
    {
        id: 8,
        name: "KGF",
        category: "Action",
        language: "Kannada",
        yearOfRelease: 2018,
        status: "Hit",
        actors: [
            { name: "Yash", role: "Rocky" }
        ]
    },
    {
        id: 9,
        name: "Vikram",
        category: "Action",
        language: "Tamil",
        yearOfRelease: 2022,
        status: "Hit",
        actors: [
            { name: "Kamal Haasan", role: "Vikram" },
            { name: "Vijay Sethupathi", role: "Santhanam" }
        ]
    },
    {
        id: 10,
        name: "Master",
        category: "Action",
        language: "Tamil",
        yearOfRelease: 2021,
        status: "Hit",
        actors: [
            { name: "Vijay", role: "JD" },
            { name: "Vijay Sethupathi", role: "Bhavani" }
        ]
    },

    {
        id: 11,
        name: "Drishyam",
        category: "Thriller",
        language: "Malayalam",
        yearOfRelease: 2013,
        status: "Hit",
        actors: [
            { name: "Mohanlal", role: "Georgekutty" }
        ]
    },
    {
        id: 12,
        name: "Premam",
        category: "Romance",
        language: "Malayalam",
        yearOfRelease: 2015,
        status: "Hit",
        actors: [
            { name: "Nivin Pauly", role: "George" },
            { name: "Sai Pallavi", role: "Malar" }
        ]
    },
    {
        id: 13,
        name: "Bangalore Days",
        category: "Drama",
        language: "Malayalam",
        yearOfRelease: 2014,
        status: "Hit",
        actors: [
            { name: "Dulquer Salmaan", role: "Arjun" },
            { name: "Nivin Pauly", role: "Kuttan" }
        ]
    },
    {
        id: 14,
        name: "Charlie",
        category: "Drama",
        language: "Malayalam",
        yearOfRelease: 2015,
        status: "Hit",
        actors: [
            { name: "Dulquer Salmaan", role: "Charlie" }
        ]
    },
    {
        id: 15,
        name: "Ustad Hotel",
        category: "Drama",
        language: "Malayalam",
        yearOfRelease: 2012,
        status: "Hit",
        actors: [
            { name: "Dulquer Salmaan", role: "Faizi" },
            { name: "Thilakan", role: "Kareemikka" }
        ]
    },

    {
        id: 16,
        name: "Dangal",
        category: "Sports",
        language: "Hindi",
        yearOfRelease: 2016,
        status: "Hit",
        actors: [
            { name: "Aamir Khan", role: "Mahavir" }
        ]
    },
    {
        id: 17,
        name: "3 Idiots",
        category: "Comedy",
        language: "Hindi",
        yearOfRelease: 2009,
        status: "Hit",
        actors: [
            { name: "Aamir Khan", role: "Rancho" }
        ]
    },
    {
        id: 18,
        name: "PK",
        category: "Comedy",
        language: "Hindi",
        yearOfRelease: 2014,
        status: "Hit",
        actors: [
            { name: "Aamir Khan", role: "PK" }
        ]
    },
    {
        id: 19,
        name: "Sholay",
        category: "Action",
        language: "Hindi",
        yearOfRelease: 1975,
        status: "Hit",
        actors: [
            { name: "Amitabh Bachchan", role: "Jai" },
            { name: "Dharmendra", role: "Veeru" }
        ]
    },
    {
        id: 20,
        name: "Lagaan",
        category: "Drama",
        language: "Hindi",
        yearOfRelease: 2001,
        status: "Hit",
        actors: [
            { name: "Aamir Khan", role: "Bhuvan" }
        ]
    },

    {
        id: 21,
        name: "Spider-Man",
        category: "Superhero",
        language: "English",
        yearOfRelease: 2002,
        status: "Hit",
        actors: [
            { name: "Tobey Maguire", role: "Peter Parker" }
        ]
    },
    {
        id: 22,
        name: "Iron Man",
        category: "Superhero",
        language: "English",
        yearOfRelease: 2008,
        status: "Hit",
        actors: [
            { name: "Robert Downey Jr.", role: "Tony Stark" }
        ]
    },
    {
        id: 23,
        name: "Avengers",
        category: "Superhero",
        language: "English",
        yearOfRelease: 2012,
        status: "Hit",
        actors: [
            { name: "Chris Evans", role: "Captain America" },
            { name: "Robert Downey Jr.", role: "Iron Man" }
        ]
    },
    {
        id: 24,
        name: "Batman Begins",
        category: "Action",
        language: "English",
        yearOfRelease: 2005,
        status: "Hit",
        actors: [
            { name: "Christian Bale", role: "Batman" }
        ]
    },
    {
        id: 25,
        name: "The Dark Knight",
        category: "Action",
        language: "English",
        yearOfRelease: 2008,
        status: "Hit",
        actors: [
            { name: "Christian Bale", role: "Batman" },
            { name: "Heath Ledger", role: "Joker" }
        ]
    },

];

// 1. Create a new array that contains only the film name and year of release for each film in the format { name, yearOfRelease }

nameYear = films.map(film => ({ name: film.name, yearOfRelease: film.yearOfRelease }));
// console.log(nameYear);

// 2. Add a new property called isRecent to each film.
// Set it to true if the film was released after 2015, otherwise false.

filmsWithIsRecent = films.map(film => ({ name : film.name, isRecent: film.yearOfRelease > 2015 }));
// console.log(filmsWithIsRecent);

// 3. Create a single array containing the names of all actors from every film.

nameActors = films.map(film => [film.actors.map(actor => actor.name), film.name]);
// console.log(nameActors);

// 4. Get all films that belong to the Action category.

actionFilm = films.filter(film => film.category == "Action").map(film => film.name);
// console.log(actionFilm);

// 5. Find all films that were released before 2010.

filmsBf2010 = films.filter(film => film.yearOfRelease < 2010).map(film => film.name);
// console.log(filmsBf2010);

// 6. Get all Malayalam films that are marked as Hit.

malaFilmsHit = films.filter(film => film.language == "Malayalam" && film.status == "Hit").map(film => film.name);
// console.log(malaFilmsHit);

// 7. Find all films that have more than one actor.

moreThOneActor = films.filter(film => film.actors.length > 1).map(film => film.name);
// console.log(moreThOneActor);

// 8. Create an object that shows the total number of films per language.

filmPerLang = {};

for (let f of films) {
    lang = f.language;
    if (lang in filmPerLang) {
        filmPerLang[lang]++;
    }
    else {
        filmPerLang[lang] = 1;
    }
}

// console.log(filmPerLang);

// 9. Find the oldest film based on the year of release

oldestFilm = films.reduce((film1, film2) => film1.yearOfRelease < film2.yearOfRelease ? film1 : film2).yearOfRelease;
oldFilm = films.filter(film => film.yearOfRelease == oldestFilm).map(film => [film.name, film.yearOfRelease]);
// console.log(oldFilm);

// 10. Count how many films are Hits and how many are Flops.

filmStatus = { Hits: 0, Flops: 0 };

for (let f of films) {
    stat = f.status;
    if (stat == "Hit") {
        filmStatus.Hits++;
    }
    else {
        filmStatus.Flops++;
    }
}

// console.log(filmStatus);

// 11. Arrange the films from newest to oldest based on the release year.

// filmsNewOld = films.sort((film1,film2) => film2.yearOfRelease - film1.yearOfRelease).map(film => [film.name,film.yearOfRelease]);
// console.log(filmsNewOld);

// 12. Arrange the films in alphabetical order by film name.

// sortName = films.sort((film1,film2) => film1.name.localeCompare(film2.name)).map(film => film.name);
// console.log(sortName);

// 13.  Check whether at least one film was released after 2020.

filmAfter2020 = films.some(film => film.yearOfRelease > 2020)
console.log(filmAfter2020);

// 14. Find the first Malayalam film in the dataset

firstMalaFilm = films.find(film => film.language == "Malayalam").name;
console.log(firstMalaFilm);

// 15. Check whether every film in the dataset has at least one actor.

actorFilm = films.every(film => film.actors.length >= 1);
console.log(actorFilm);










  