const gulp = require('gulp');

//Plugins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const webpack = require('webpack-stream');


//Конфиг
const path = require('../config/path');
const settings = require('../config/settings');

const script = () => {
    return gulp
        .src(path.js.src,{sourcemaps:true})
        .pipe(plumber({
            errorHandler:notify.onError()
        }))
        .pipe(babel())
        .pipe(webpack(settings.webpack))
        .pipe(uglify())
        .pipe(gulp.dest(path.js.dest,{sourcemaps:true}))
}

module.exports = script;