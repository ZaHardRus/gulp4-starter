const debounce = (func, wait) => {
    let timeout;
 
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            func(...args);
        };
 
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};
//window.addEventListener('scroll', debounce( function() { console.log(123) },1000));