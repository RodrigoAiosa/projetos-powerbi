const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});
