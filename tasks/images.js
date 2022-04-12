import gulp from 'gulp';
//Plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';
import webp from 'gulp-webp'
import gulpif from 'gulp-if'
//Конфиг
import path from '../config/path.js';
import settings from '../config/settings.js';

const images = () => {
    return gulp
        .src(path.images.src)
        .pipe(plumber({
            errorHandler: notify.onError()
        }))
        .pipe(newer(path.images.dest))
        .pipe(webp())
        .pipe(gulp.dest(path.images.dest))
        .pipe(gulp.src(path.images.src))
        .pipe(newer(path.images.dest))
        .pipe(gulpif(settings.isProd, imagemin(settings.imagemin)))
        .pipe(gulp.dest(path.images.dest))
}

export default images;