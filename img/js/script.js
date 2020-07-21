const hamburgerBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

const eventsListener = () => {
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle("is-active")
        nav.classList.toggle('nav__active')
    })

    nav.addEventListener('click', () => {
        hamburgerBtn.classList.toggle("is-active")
        nav.classList.toggle('nav__active')
    })
}

eventsListener();