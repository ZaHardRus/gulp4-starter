const gulp = require('gulp');

//Plugins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');


//Конфиг
const path = require('../config/path');
const settings = require('../config/settings');

const images = () => {
    return gulp
        .src(path.images.src)
        .pipe(plumber({
            errorHandler:notify.onError()
        }))
        .pipe(newer(path.images.dest))
        .pipe(imagemin(settings.imagemin))

        .pipe(gulp.dest(path.images.dest))
}

module.exports = images;