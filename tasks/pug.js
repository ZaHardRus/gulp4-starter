import gulp from 'gulp';
//Plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import gulpPug from 'gulp-pug';
import webpHtml from 'gulp-webp-html'
//Конфиг
import path from '../config/path.js';
import settings from '../config/settings.js';

const pug = () => {
    return gulp
        .src(path.pug.src)
        .pipe(plumber({
            errorHandler: notify.onError()
        }))
        .pipe(gulpPug(settings.pug))
        .pipe(webpHtml())
        .pipe(gulp.dest('./public'))
}

export default pug;