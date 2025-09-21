const typed = new Typed('.animacion-cargo', {
  strings: ['^1000Back-End Developer Trainee', '^1000Web Developer Trainee'],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    // Le resto 100px, para que se considera activa, ya que la navbar tapa parte de las sección anterior.
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

document.querySelectorAll('.estudios-carrusel').forEach(carrusel => {
    const track = carrusel.querySelector('.estudios-carrusel-tarjetas');
    const cards = Array.from(track.children);
    const nextBtn = carrusel.querySelector('.carrusel-btn.next');
    const prevBtn = carrusel.querySelector('.carrusel-btn.prev');
    
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    });
});
