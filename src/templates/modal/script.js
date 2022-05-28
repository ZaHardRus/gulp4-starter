
    const trigger = document.querySelector(".modal__btn")
    const modal = document.querySelector('.modal__wrapper')
    const close = document.querySelector('.modal__close')

    trigger.addEventListener('click',e=>{
        e.preventDefault()
        modal.style.display = "flex"
    })

    close.addEventListener('click',e=>{
        e.preventDefault()
        modal.style.display = "none"
    })

    modal.addEventListener('click',e=>{
        if(e.target === modal){
            modal.style.display = "none"
        }
    })