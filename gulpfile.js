import gulp from 'gulp';
import browserSync from 'browser-sync'

//Конфиг
import path from './config/path.js'
import settings from "./config/settings.js";

import clear from './tasks/clear.js';
import html from './tasks/html.js';
import scss from './tasks/scss.js';
import script from './tasks/script.js';
import images from './tasks/images.js';
import fonts from './tasks/fonts.js';
//const css = require('./tasks/css');
//const pug = require('./tasks/pug');


const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}

//Watchers
const watcher = () => {
    gulp.watch(path.html.watch, html).on("all", browserSync.reload)
    gulp.watch(path.scss.watch, scss).on("all", browserSync.reload)
    gulp.watch(path.js.watch, script).on("all", browserSync.reload)
    gulp.watch(path.images.watch, images).on("all", browserSync.reload)
    gulp.watch(path.fonts.watch, fonts).on("all", browserSync.reload)
    //gulp.watch(path.pug.watch,pug).on("all",browserSync.reload)
}

export {script, html, scss, clear, images, fonts}

export const build = gulp.series(
    clear,
    gulp.parallel(html, scss, script, images, fonts),
)
export const dev = gulp.series(
    build,
    gulp.parallel(watcher, server)
)

export default settings.isProd ? build : dev