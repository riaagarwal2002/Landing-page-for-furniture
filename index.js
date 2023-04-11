let header = document.querySelector("header")
let landingDiv = document.querySelector(".landing")
let reasonsDiv = document.querySelector(".right-side")
let reasons = document.querySelectorAll(".reason")
let productRow1 = document.querySelector(".row-1")
let productRow2 = document.querySelector(".row-2")

// console.log(reasonDiv.offsetTop)
// if (reasonDiv.hie)
window.addEventListener("scroll", () => {
    // console.log(`header: ${header.offsetTop}`)
    // console.log(`landingDiv: ${landingDiv.offsetTop}`)
    console.log(`header offsetHeight: ${header.offsetHeight}`)
    console.log(`landingDiv offsetHeight: ${landingDiv.offsetHeight}`)
    console.log(`window.scrollY: ${window.scrollY}`)

    if (window.scrollY > (landingDiv.offsetHeight) * 0.5) {

        reasons.forEach(reason => {
            reason.style.animationName = "cards-animation"
        })
    }
    if (window.scrollY > (landingDiv.offsetHeight)) {

        productRow1.style.animationName = "products-animation-right"
        productRow2.style.animationName = "products-animation-left"
    }

})