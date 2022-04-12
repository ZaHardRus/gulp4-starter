const gulp = require('gulp');

//Plugins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');

//Конфиг
const path = require('../config/path');
const settings = require('../config/settings');

const html = () => {
    return gulp
        .src(path.html.src)
        .pipe(plumber({
            errorHandler:notify.onError()
        }))
        .pipe(fileInclude())
        .pipe(size())
        .pipe(htmlmin(settings.htmlmin))
        .pipe(size())
        .pipe(gulp.dest(path.html.dest))
}

module.exports = html;