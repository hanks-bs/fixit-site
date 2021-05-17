const buttonsOnsAnimations = () => {
    let onsSection = document.querySelector(".coninf");
    let buttons = onsSection.querySelectorAll(".buttonBx > a");

    let image = onsSection.querySelector("img");
    image.style.opacity = 0;

    buttons.forEach(el => {
        el.style.opacity = 0;
    })

    let show_el = () => {
        let tl = gsap.timeline();
        buttons.forEach(el => {
            tl.fromTo(el, .7, {
                y: "-15%"
            }, {
                t: 0,
                opacity: 1
            })
        })
        tl.fromTo(image, .7, {
            x: "50%"
        }, {
            x: 0,
            opacity: 1
        }, "-=1")
    }

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
    sectionObserver.observe(onsSection)
}

buttonsOnsAnimations();