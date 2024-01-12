function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

window.addEventListener('scroll', () => {
    const section1 = document.getElementById('projects');
    const section2 = document.getElementById('experience');

    function enableDarkMode() {
        document.documentElement.classList.add('dark-mode');
        document.documentElement.classList.remove('light-mode');
    }

    function enableLightMode() {
        document.documentElement.classList.remove('dark-mode');
        document.documentElement.classList.add('light-mode');
    }

    const checkAndSetMode = (targetSection) => {
        const sectionTop = targetSection.offsetTop;
        const sectionHeight = targetSection.offsetHeight;
        const scrollPosition = window.scrollY;

        const scrollStart = sectionTop - window.innerHeight / 2;
        const scrollEnd = sectionTop + sectionHeight - window.innerHeight / 2;

        if (scrollPosition >= scrollStart && scrollPosition <= scrollEnd) {
            enableDarkMode();
            return true;
        }
        enableLightMode();
        return false;
    };

    if (!checkAndSetMode(section1)) {
        checkAndSetMode(section2);
    }
});

// Sending email
function sendEmail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    
    const serviceID = "service_kt2yeqe";
    const templateID = "template_pf7ddi2";
    
    emailjs.send(serviceID, templateID, params)
    .then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("your message sent successfully")
        })
    .catch((err) => console.log(err));
}
