class Movie {
    setMovie(id,title,language,genre){
        this.id = id;
        this.title = title;
        this.language = language;
        this.genre = genre;
    }
    displayMovie(){
        console.log(this.id,this.title,this.language,this.genre);
        
    }
}

var premaluMovie = new Movie();

premaluMovie.setMovie(141,"PREMALU","Malayalam","Romantic")
premaluMovie.displayMovie();

var hridayapoorvamMovie = new Movie();

hridayapoorvamMovie.setMovie(245,"HRIDAYAPOORVAM","Malayalam","Comedy");
hridayapoorvamMovie.displayMovie();