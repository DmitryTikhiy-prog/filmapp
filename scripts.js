const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?');

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

const lastSeeFilm = prompt('Один из последних просмотренных фильмов?'),
      rateFilm = prompt('На сколько оцените его?');
personalMovieDB.movies[lastSeeFilm] = rateFilm;
alert(personalMovieDB.movies[lastSeeFilm]);