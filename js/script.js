const body = document.querySelector("body");
const hamburgerBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll('.nav__element');
const sectionHeader = document.getElementById('header');
const sectionAboutMe = document.getElementById('about-me');
const sectionProjects = document.getElementById('projects');
const sectionContact = document.getElementById('contact');
const halfWindowHeight = window.innerHeight * 0.5;

const removeActiveClassToNav = () => {
    const activeLink = document.querySelector('.nav__element--active');
    activeLink.classList.remove('nav__element--active');
}

const activateNav = () => {
    hamburgerBtn.classList.toggle("is-active");
    nav.classList.toggle('nav__active');
    body.classList.toggle('overflow');
}

const actions = () => {
    hamburgerBtn.addEventListener('click', () => {
        activateNav();
    });

    nav.addEventListener('click', () => {
        activateNav();
    });

    window.addEventListener('scroll', () => {
        const scrollWindow = window.scrollY;

        if (scrollWindow < sectionHeader.offsetHeight - halfWindowHeight && !navLinks[0].classList.contains('nav__element--active')) {
            removeActiveClassToNav();
            navLinks[0].classList.add('nav__element--active');
        } else if (scrollWindow >= sectionAboutMe.offsetTop - halfWindowHeight && scrollWindow < sectionProjects.offsetTop - halfWindowHeight && !navLinks[1].classList.contains('nav__element--active')) {
            removeActiveClassToNav();
            navLinks[1].classList.add('nav__element--active');
        } else if (scrollWindow >= sectionProjects.offsetTop - halfWindowHeight && scrollWindow < sectionContact.offsetTop - halfWindowHeight && !navLinks[2].classList.contains('nav__element--active')) {
            removeActiveClassToNav();
            navLinks[2].classList.add('nav__element--active');
        } else if (scrollWindow >= sectionContact.offsetTop - halfWindowHeight && !navLinks[3].classList.contains('nav__element--active')) {
            removeActiveClassToNav();
            navLinks[3].classList.add('nav__element--active');
        };
    });
}

actions();