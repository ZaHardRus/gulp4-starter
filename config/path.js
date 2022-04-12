const pathSrc = "./src"
const pathDest = "./public"

module.exports = {
    root: pathDest,
    src:pathSrc,
    html:{
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/html/**/*.html",
        dest: pathDest
    },
    pug:{
        src: pathSrc + "/pug/*.pug",
        watch: pathSrc + "/pug/**/*.pug",
        dest: pathDest
    },
    css:{
        src: pathSrc + "/css/*.css",
        watch: pathSrc + "/css/**/*.css",
        dest: pathDest + "/css"
    },
    scss:{
        src: pathSrc + "/scss/*.{scss,sass}",
        watch: pathSrc + "/scss/**/*.{scss,sass}",
        dest: pathDest + "/css"
    },
    js:{
        src: pathSrc + "/js/*.js",
        watch: pathSrc + "/js/**/*.js",
        dest: pathDest + "/js"
    },
    images:{
        src: pathSrc + "/assets/images/*.{png,jpg,jpeg,gif,svg,ico}",
        watch: pathSrc + "/assets/images/**/*.{png,jpg,jpeg,gif,svg,ico}",
        dest: pathDest + "/assets/images"
    }
}