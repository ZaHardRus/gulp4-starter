import del from 'del';
//Конфиг
import path from '../config/path.js';

const clear = () => {
    return del(path.root);
}
export default clear