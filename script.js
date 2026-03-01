// Animação suave ao scroll
const cards = document.querySelectorAll(".flip-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease-out";
  observer.observe(card);
});
