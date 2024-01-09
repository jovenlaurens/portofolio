function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function stickyHeader() {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0)
}

// Animation 

document.addEventListener("DOMContentLoaded", function() {
    // Get the nav element
    var nav = document.querySelector('.nav');

    // Add the 'animate' class to trigger the animation only on the first load
    nav.classList.add('animate');

    // Remove the 'animate' class after the animation ends
    nav.addEventListener('animationend', function() {
        nav.classList.remove('animate');
    });
});

// Scroll Reveal Animation

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
});

// Scroll Home
sr.reveal(".home-title", {});
sr.reveal(".home-subtitle", { delay: 200 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".home-social-icon", { interval: 200 });