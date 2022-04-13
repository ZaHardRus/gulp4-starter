const headers = document.querySelectorAll('.tabs__header-item')
const content = document.querySelectorAll('.tabs__content-item')


headers.forEach(item=>{
    item.addEventListener('click',function (e){
        e.preventDefault()
        const tabId = e.target.dataset.tab
        document.querySelectorAll('.tabs__header-item').forEach(child=>child.classList.remove('active'))
        document.querySelectorAll('.tabs__content-item').forEach(child=>child.classList.remove('active'))

        item.classList.add('active')
        content.forEach(el=>{
            if(el.dataset.tab === tabId){
                el.classList.add('active')
            }
        })
    })
})
