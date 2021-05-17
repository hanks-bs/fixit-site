const animateNav = () => {
let menuButton = document.querySelector(".menu.menu--close2");
let menuContainer = document.querySelector("nav");
let menuItems = menuContainer.querySelectorAll("li");

const hideNav = () => {
    let tl = gsap.timeline();
    menuButton.classList.remove("open");
    tl.to(menuContainer, 0.5, {
        clipPath: "circle(0% at 100% 0)"
    }) 
    .to(menuContainer, 0.5, {
        display: "none"
    })
    .add(() => {
        menuItems.forEach(item => {
            item.style.opacity = 0;
        }, .8)
    })
};

menuButton.addEventListener("click", () => {
    if(menuButton.classList.contains("open"))
    {
        hideNav();
    }
    else
    {
        let tl = gsap.timeline();
        menuButton.classList.add("open");
        
            tl.to(menuContainer, 0.1, {
                display: "flex"
            })
            .to(menuContainer, .7, {
                clipPath: "circle(250% at 100% 0)"
            })
            .add(() => {
                menuItems.forEach(item => {
                    tl.fromTo(item, .5, {
                        opacity: 0,
                        x: 25
                    },
                    {
                        opacity: 1,
                        x: 0
                    }, "-=.2")
                })
            })
    }

    menuItems.forEach(element => {
        element.querySelector("a").addEventListener("click", () => {
            let active = document.querySelector(".nav__item.active")
            active.classList.remove("active");

            element.classList.add("active");
        hideNav();
        })
      });
});
}
animateNav();