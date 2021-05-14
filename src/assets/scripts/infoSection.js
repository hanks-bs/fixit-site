let infoSectionAnimation = () => {
    const elem = document.querySelector(".waarom-section");
    elem.querySelector("div > img").style.opacity = 0;
    elem.parentNode.querySelector("button").style.opacity = 0;
    elem.querySelector("div > h2").style.opacity = 0;
    elem.querySelector("div > h2").style.height = 0;

    elem.querySelector("div > p").style.opacity = 0;
    elem.querySelector("div > p").style.height = 0;

    let tl1 = gsap.timeline();
    tl1.add(() => {
        ScrollTrigger.create({
            trigger: elem,
            start: 'top 70%',
            end: "bottom top",
            once: true,
            onEnter: () => {
                tlin = gsap.timeline()
                    .fromTo(elem.querySelector("div > img"), 1, {
                        y: "-300px"
                    }, {
                        y: 0,
                        opacity: 1
                    })
                    .fromTo(elem.parentNode.querySelector("button"), {

                        y: 40
                    }, {
                        opacity: 1,
                        y: "-55px",
                        duration: .7
                    }, "-=.5")
                    .to([elem.querySelector("div > h2"), elem.querySelector("div > p")], {
                        height: "auto",
                        opacity: 1,
                        duration: .7
                    }, "-=.5")


            }
        })
    })



}
infoSectionAnimation();