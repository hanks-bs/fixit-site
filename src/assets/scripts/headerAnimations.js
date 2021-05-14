
let headerAnimations = () =>
{
    const person = document.querySelector(".left-person > img");

const logo = document.querySelector(".logo-box img");
const logo_desc = document.querySelector(".logo-description");

const right_content = document.querySelector(".header-description")
let tl = gsap.timeline();
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
}, "-=0.5")
}
headerAnimations();
