"use strict";

const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?');

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

for (let i= 0; i < 2; i++) {
    let lastSeeFilm = prompt('Один из последних просмотренных фильмов?'),
        rateFilm = prompt('На сколько оцените его?');
    if (lastSeeFilm !='' && rateFilm !='' && lastSeeFilm !=null && rateFilm != null && lastSeeFilm.length<50) {
        personalMovieDB.movies[lastSeeFilm] = rateFilm;
        alert(personalMovieDB.movies[lastSeeFilm]);
    } else {
        alert('Неправильный ввод');
        i--;
    }
    
}


if (personalMovieDB.count<10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB>=10 && personalMovieDB<30) {
    alert('Вы классический зритель');
} else if (personalMovieDB>=30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}
