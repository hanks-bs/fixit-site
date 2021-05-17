
let headerAnimations = () =>
{
    let  elem = document.querySelector(".topsection");
    const person = document.querySelector(".left-person > img");

const logo = document.querySelector(".logo-box img");
const logo_desc = document.querySelector(".logo-description");

const right_content = document.querySelector(".header-description")
const show_el = () => {
    let tl = gsap.timeline()
    tl.from(person, .7, {
        x:  "-15%",
        opacity: 0
    })
    tl.from(right_content, .7, {
        x:  "15%",
        opacity: 0
    }, "-=.5")
    .from([logo,logo_desc], .7, {
        y:  "-15%",
        opacity: 0
    }, "-=0.5");

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
sectionObserver.observe(elem)

}
headerAnimations();
