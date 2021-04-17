"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?'); 

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?'); 
    }
}

start();

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

function rememberOfFilm () {
    for (let i= 0; i < 2; i++) {
        let lastSeeFilm = prompt('Один из последних просмотренных фильмов?'),
            rateFilm = prompt('На сколько оцените его?');
        if (lastSeeFilm !='' && rateFilm !='' && lastSeeFilm !=null && rateFilm != null && lastSeeFilm.length<50) {
            personalMovieDB.movies[lastSeeFilm] = rateFilm;
            console.log(personalMovieDB.movies[lastSeeFilm]);
        } else {
            console.log('Неправильный ввод');
            i--;
        }
        
    }
}

rememberOfFilm();

function detectPersonalLevel () {
    if (personalMovieDB.count<10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count>=10 && personalMovieDB.count<30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count>=30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for(let i =1; i<=3; i++) {
        const unswer = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1]=unswer;
    }
}

writeYourGenres ();


