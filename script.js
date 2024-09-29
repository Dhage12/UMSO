function navAnimation(){
    gsap.from(".left-nav img, .right-nav a,.right-nav .btn,.third-nav i",{
        scale:0,
        opacity:0,
        duration:1,
        stagger:.1,
        scrollTrigger:{
            trigger:".navbar",
            scroller:".body",
            start:"top 0",
            end:"top -5%",
            scrub:true,
        },
    })
    
}
navAnimation();

