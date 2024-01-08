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