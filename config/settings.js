module.exports = {
    htmlmin:{
        collapseWhitespace: true
    },
    imagemin:{
        verbose:true
    },
    pug:{
        pretty:true,
        data:{
            news:require('../data/news.json')
        }
    },
    webpack:{
        mode: 'development'
    },
}