let button_hoverEffect = () => {
    let buttons = document.querySelectorAll(".buttonBx button")

    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            let tl = gsap.timeline();
    
            tl.to(button, .3, {
                y: -10,
                boxShadow: "rgba(0, 0, 0, 0.34) 3px 22px 21px -2px",
                zIndex: 1
            })
        })
    })
    
    buttons.forEach(button => {
        button.addEventListener("mouseout", () => {
            let tl = gsap.timeline();
    
            tl.to(button, .3, {
                y: 0,
                boxShadow: "none",
                zIndex: 0
            })
            
        })
    })
    
}
button_hoverEffect();