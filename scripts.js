"use strict";

const personalMovieDB = {
    count:0,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
    toggleVisibleMyDB() {
        if(this.privat) {this.privat=false;} 
        else {this.privat=true;}
    },
    start() {
        this.count = +prompt('Сколько фильмов Вы посмотрели?'); 
        while(this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов Вы посмотрели?'); 
        }
    },
    rememberOfFilm () {
        for (let i= 0; i < 2; i++) {
            let lastSeeFilm = prompt('Один из последних просмотренных фильмов?'),
                rateFilm = prompt('На сколько оцените его?');
            if (lastSeeFilm !='' && rateFilm !='' && lastSeeFilm !=null && rateFilm != null && lastSeeFilm.length<50) {
                this.movies[lastSeeFilm] = rateFilm;
                console.log(this.movies[lastSeeFilm]);
            } else {
                console.log('Неправильный ввод');
                i--;
            }
            
        }
    },
    detectPersonalLevel () {
        if (this.count<10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count>=10 && this.count<30) {
            console.log('Вы классический зритель');
        } else if (this.count>=30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    writeYourGenres () {
        for(let i =1; i<=3; i++) {
            this.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`);
            if (this.genres == null) {i--;}
        } 
        this.genres.forEach((item, i)=> console.log(`Любимый жанр ${i+1} - это ${item}`));
    },
    showMyDB(hidden) {
        if (!hidden) {
            console.log(this);
        } 
    }
};

personalMovieDB.start();
personalMovieDB.rememberOfFilm();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();

