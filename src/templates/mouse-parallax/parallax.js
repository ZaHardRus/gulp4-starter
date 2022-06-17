window.onload = () => {
    const parallax = document.querySelector('.parallax')
    
    if(parallax){
        const content = document.querySelector('.parallax__container')
        const mount = document.querySelector('.images-parallax__mount')
        const human = document.querySelector('.images-parallax__human')

        const forMount = 10;
        const forHuman = 7.5;

        const speed = 0.005;

        let posX=0, posY=0;
        let XPercent=0,YPercent=0

        function setMouseParallaxStyle () {
            const distX = XPercent - posX;
            const distY = YPercent - posY;

            posX = posX + (distX * speed);
            posY = posY + (distY * speed);

            mount.style.cssText = `transform: translate(${posX / forMount}%,${posY/forMount}%)`;
            human.style.cssText = `transform: translate(${-posX / forHuman}%,${posY/forHuman}%)`;

            requestAnimationFrame(setMouseParallaxStyle)
        }
        setMouseParallaxStyle()

        parallax.addEventListener('mousemove',(e)=>{
            const parallaxW = parallax.offsetWidth
            const parallaxH = parallax.offsetHeight

            const coordX = e.pageX - parallaxW / 2
            const coordY = e.pageY - parallaxH / 2

            XPercent = coordX / parallaxW*100
            YPercent = coordY / parallaxH*100
        })

        let thresholdSet = [];
        for(let i = 0; i < 1.0; i += 0.005){
            thresholdSet.push(i)
        }

        const callback = (entries,observer) => {
            console.log(1)
            const scrollPercent = window.pageYOffset / parallax.offsetHeight * 100
            setParallaxItemStyle(scrollPercent)
        }

        const observer = new IntersectionObserver(callback,{
            threshold:thresholdSet
        })
        observer.observe(document.querySelector('.content'))

        function setParallaxItemStyle(scrollPercent){
            content.style.cssText = `transform: translate(0%,-${scrollPercent / 45}%)`
            mount.parentElement.style.cssText = `transform: translate(0%,-${scrollPercent / 30}%)`
            human.parentElement.style.cssText = `transform: translate(0%,-${scrollPercent / 2}%)`
        }
    }
}