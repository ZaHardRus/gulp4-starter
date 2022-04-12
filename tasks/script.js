import gulp from 'gulp';
//Plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import webpack from 'webpack-stream';
//Конфиг
import path from '../config/path.js';
import settings from '../config/settings.js';

const script = () => {
    return gulp
        .src(path.js.src, {sourcemaps: settings.isDev})
        .pipe(plumber({
            errorHandler: notify.onError()
        }))
        .pipe(babel())
        .pipe(webpack(settings.webpack))
        .pipe(uglify())
        .pipe(gulp.dest(path.js.dest, {sourcemaps: settings.isDev}))
}

export default script;