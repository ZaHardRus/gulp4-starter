import gulp from 'gulp';
//Plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

import fileInclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import size from 'gulp-size';
import webpHtml from 'gulp-webp-html'

//Конфиг
import path from '../config/path.js';
import settings from '../config/settings.js';

const html = () => {
    return gulp
        .src(path.html.src)
        .pipe(plumber({
            errorHandler:notify.onError()
        }))
        .pipe(fileInclude())
        .pipe(webpHtml())
        .pipe(size())
        .pipe(htmlmin(settings.htmlmin))
        .pipe(size())
        .pipe(gulp.dest(path.html.dest))
}

export default html;