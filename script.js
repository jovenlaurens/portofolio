function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

window.addEventListener('scroll', () => {
    const section1 = document.getElementById('projects');
    const section2 = document.getElementById('experience');

    const checkAndSetMode = (targetSection, darkMode, lightMode) => {
        const sectionTop = targetSection.offsetTop;
        const sectionHeight = targetSection.offsetHeight;
        const scrollPosition = window.scrollY;

        const scrollStart = sectionTop - window.innerHeight / 2;
        const scrollEnd = sectionTop + sectionHeight - window.innerHeight / 2;

        if (scrollPosition >= scrollStart && scrollPosition <= scrollEnd) {
            document.body.style.backgroundColor = darkMode.backgroundColor;
            document.body.style.color = darkMode.textColor;
            return true;
        }
        document.body.style.backgroundColor = lightMode.backgroundColor;
        document.body.style.color = lightMode.textColor;
        return false;
    };

    const darkMode = {
        backgroundColor: '#333',
        textColor: '#fff'
    };

    const lightMode = {
        backgroundColor: '#fff',
        textColor: '#333'
    };

    if (!checkAndSetMode(section1, darkMode, lightMode)) {
        checkAndSetMode(section2, darkMode, lightMode);
    }
});