document.querySelector('.accordion').addEventListener('click',(e)=>{
    if(
        e.target.closest( '.accordion__item-trigger-icon')
            ||
        e.target.closest( '.accordion__item-trigger-text'))
    {
        e.target.closest('.accordion__item').classList.toggle('active')
    }
})