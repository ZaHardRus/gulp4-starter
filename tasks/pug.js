const gulp = require('gulp');

//Plugins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const gulpPug = require('gulp-pug');
//Конфиг
const path = require('../config/path');
const settings = require('../config/settings');

const pug = () => {
    return gulp
        .src(path.pug.src)
        .pipe(plumber({
            errorHandler:notify.onError()
        }))
        .pipe(gulpPug(settings.pug))
        .pipe(gulp.dest('./public'))
}

module.exports = pug;