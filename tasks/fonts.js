import gulp from 'gulp';
//Plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import newer from 'gulp-newer';
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'
//Конфиг
import path from '../config/path.js';
import settings from "../config/settings.js";

const fonts = () => {
    return gulp
        .src(path.fonts.src)
        .pipe(plumber({
            errorHandler: notify.onError()
        }))
        .pipe(newer(path.fonts.dest))
        .pipe(fonter(settings.fonter))
        .pipe(gulp.dest(path.fonts.dest))
        .pipe(ttf2woff2())
        .pipe(gulp.dest(path.fonts.dest))
}

export default fonts;