import gulp from 'gulp';
//Plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import concat from 'gulp-concat';
import cssimport from 'gulp-cssimport'
import autoprefixer from 'gulp-autoprefixer'
import csso from 'gulp-csso'
import rename from 'gulp-rename'
import groupMedia from 'gulp-group-css-media-queries'
import webpCss from 'gulp-webp-css'

//Конфиг
import path from '../config/path.js';
import settings from "../config/settings.js";

const css = () => {
    return gulp
        .src(path.css.src, {sourcemaps: settings.isDev})
        .pipe(plumber({
            errorHandler: notify.onError()
        }))
        .pipe(concat("main.css"))
        .pipe(cssimport())
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(groupMedia())
        .pipe(gulp.dest(path.css.dest, {sourcemaps: settings.isDev}))
        .pipe(rename({suffix: ".min"}))
        .pipe(csso())
        .pipe(gulp.dest(path.css.dest, {sourcemaps: true}))
}

export default css;