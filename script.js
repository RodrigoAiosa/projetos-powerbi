// SCROLL SUAVE MENU
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// SCROLL REVEAL
const elements = document.querySelectorAll(".card, .servico-card, .hero-text, .sobre, .cta");

function reveal() {
    const trigger = window.innerHeight * 0.85;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);

// Adiciona classe fade-in automaticamente
elements.forEach(el => el.classList.add("fade-in"));
