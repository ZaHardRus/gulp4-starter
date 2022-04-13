document.querySelectorAll('.accordion').forEach(el=>{
    el.addEventListener('click',(e)=>{
        console.log(e)
        if(
            e.target.closest( '.accordion__item-trigger-icon')
            ||
            e.target.closest( '.accordion__item-trigger-text'))
        {
            e.target.closest('.accordion__item').classList.toggle('active')
        }
    })
})