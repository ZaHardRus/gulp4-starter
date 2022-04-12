const gulp = require('gulp');

//Plugins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const rename = require('gulp-rename')
const groupMedia = require('gulp-group-css-media-queries')
const sass = require('gulp-sass')(require('sass'))
const sassGlob = require('gulp-sass-glob')

//Конфиг
const path = require('../config/path');

const scss = () => {
    return gulp
        .src(path.scss.src,{sourcemaps:true})
        .pipe(plumber({
            errorHandler:notify.onError()
        }))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(groupMedia())
        .pipe(gulp.dest(path.css.dest,{sourcemaps:true}))
        .pipe(rename({suffix:".min"}))
        .pipe(csso())
        .pipe(gulp.dest(path.scss.dest,{sourcemaps:true}))
}

module.exports = scss;