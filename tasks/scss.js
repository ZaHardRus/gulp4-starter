import gulp from 'gulp';
//Plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import autoprefixer from 'gulp-autoprefixer'
import csso from 'gulp-csso'
import rename from 'gulp-rename'
import groupMedia from 'gulp-group-css-media-queries'
import gulpsass from 'gulp-sass'
import sassComp from 'sass'
import sassGlob from 'gulp-sass-glob'
import webpCss from 'gulp-webp-css'
import concat from 'gulp-concat';
//Конфиг
import path from '../config/path.js'
import settings from "../config/settings.js";

const sass = gulpsass(sassComp)


const scss = () => {
    return gulp
        .src(path.scss.src, {sourcemaps: settings.isDev})
        .pipe(plumber({
            errorHandler: notify.onError()
        }))
        .pipe(concat('main.scss'))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(groupMedia())
        .pipe(gulp.dest(path.css.dest, {sourcemaps: settings.isDev}))
        .pipe(rename({suffix: ".min"}))
        .pipe(csso())
        .pipe(gulp.dest(path.scss.dest, {sourcemaps: true}))
}
export default scss;