window.addEventListener("scroll", () => {
    const header = document.querySelector(".header-container");
    header.classList.toggle("header-active", window.scrollY > 0);
});

const navMenuShow = () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".nav-menu");

    hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu").forEach(n => n.addEventListener("click", () => {
        hamburgerMenu.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    window.addEventListener("resize", () => {
        if (window.innerWidth > 792) {
            if (navMenu.className.includes("active")) {
                hamburgerMenu.classList.remove("active");
                navMenu.classList.remove("active");
            }
        }
    });
}
navMenuShow();



