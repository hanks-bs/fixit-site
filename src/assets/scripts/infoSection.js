let infoSectionAnimation = () => {
    const elem = document.querySelector(".waarom-section");
    elem.querySelector("div > img").style.opacity = 0;
    elem.parentNode.querySelector("button").style.opacity = 0;
    elem.querySelector("div > h2").style.opacity = 0;
    elem.querySelector("div > h2").style.height = 0;

    elem.querySelector("div > p").style.opacity = 0;
    elem.querySelector("div > p").style.height = 0;

    let show_el = () => {
        let tlin = gsap.timeline()
        .fromTo(elem.querySelector("div > img"), 1, {
            y: "-300px"
        }, {
            y: 0,
            opacity: 1,
        }, )
        .fromTo(elem.parentNode.querySelector("button"), {

            y: 40
        }, {
            opacity: 1,
            y: "-55px",
            duration: .7,
        }, "-=.5")
        .to([elem.querySelector("div > h2"), elem.querySelector("div > p")], {
            height: "auto",
            opacity: 1,
            duration: .7,
            ease: "power1"

        }, "-=.5")

    };
    
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                show_el();
                sectionObserver.disconnect();
            }

        });
    }, {
        rootMargin: "-10% 0% -10% 0%",
        threshold: [0, 1]
    });
    sectionObserver.observe(elem)



}
infoSectionAnimation();