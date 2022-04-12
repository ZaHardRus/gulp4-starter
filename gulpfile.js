const gulp = require('gulp');
const browserSync = require('browser-sync').create();

//Конфиг
const path = require('./config/path');

const clear = require('./tasks/clear');
const html = require('./tasks/html');
const scss = require('./tasks/scss');
const script = require('./tasks/script');
const images = require('./tasks/images');
//const css = require('./tasks/css');
//const pug = require('./tasks/pug');


const server = () => {
    browserSync.init({
        server: {
            baseDir:path.root
        }
    })
}

//Watchers
const watcher = () => {
    gulp.watch(path.html.watch,html).on("all",browserSync.reload)
    gulp.watch(path.scss.watch,scss).on("all",browserSync.reload)
    gulp.watch(path.js.watch,script).on("all",browserSync.reload)
    gulp.watch(path.images.watch,images).on("all",browserSync.reload)
    //gulp.watch(path.pug.watch,pug).on("all",browserSync.reload)
}

exports.script = script
exports.html = html
exports.scss = scss
exports.clear = clear
exports.images = images


exports.dev = gulp.series(
    clear,
    gulp.parallel(html,scss,script,images),
    gulp.parallel(watcher,server)
)