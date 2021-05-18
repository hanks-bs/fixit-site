const animateAll = () => {
    let section = document.querySelector(".section__B");
    let subsections = section.querySelectorAll(".subsection");
    subsections.forEach(subsection => {
        let container = subsection.querySelector(".image__container");
        let images = container.querySelectorAll("img");
        images.forEach(img => {
            img.style.opacity = 0;
        })
        let sectionsObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let tl = gsap.timeline()
                        .add(() => {
                            images.forEach(item => {
                                tl.to(item, .7, {
                                    opacity: 1,
                                }, "-=.2")
                            })
                        })
                    sectionsObserver.disconnect();
                }
            });
        }, {
            rootMargin: "-10% 0% -10% 0%",
            threshold: 0.5
        });
        sectionsObserver.observe(subsection)
    })
}
animateAll();