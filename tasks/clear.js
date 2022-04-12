const del = require('del');
//Конфиг
const path = require('../config/path');

const clear = () => {
    return del(path.root);
}

module.exports = clear;