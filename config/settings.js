import news from '../data/news.json'

const isProd = process.argv.includes("--production")
const isDev = !isProd
export default {
    isProd,
    isDev,
    htmlmin: {
        collapseWhitespace: isProd
    },
    imagemin: {
        verbose: true
    },
    pug: {
        pretty: isDev,
        data: {
            news
        }
    },
    webpack: {
        mode: isProd ? 'production' : 'development'
    },
    fonter: {
        formats: ["ttf", "woff", "eot", "svg"]
    }
}