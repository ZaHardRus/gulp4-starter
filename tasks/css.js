const gulp = require('gulp');

//Plugins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
const cssimport = require('gulp-cssimport')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const rename = require('gulp-rename')
const groupMedia = require('gulp-group-css-media-queries')

//Конфиг
const path = require('../config/path');

const css = () => {
    return gulp
        .src(path.css.src,{sourcemaps:true})
        .pipe(plumber({
            errorHandler:notify.onError()
        }))
        .pipe(concat("main.css"))
        .pipe(cssimport())
        .pipe(autoprefixer())
        .pipe(groupMedia())
        .pipe(gulp.dest(path.css.dest,{sourcemaps:true}))
        .pipe(rename({suffix:".min"}))
        .pipe(csso())
        .pipe(gulp.dest(path.css.dest,{sourcemaps:true}))
}

module.exports = css;