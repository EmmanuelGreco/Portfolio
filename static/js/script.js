// Limpia el # de la URL
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    history.replaceState(null, null, ' ');
  });
});


// Indico en navbar la seccion en la que se encuentra
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
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


// Animacion del cargo
const typed = new Typed('.animacion-cargo', {
  strings: ['^1000Back-End Developer Trainee', '^1000Web Developer Trainee', '^1000IT Enthusiast'],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 2000,
  loop: true
});


// Funcionalidad del Carrusel
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


// Modal Certificados
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-certificado");
  const modalImg = document.getElementById("img-modal");
  const caption = document.getElementById("caption");
  const spanCerrar = document.querySelector(".modal .cerrar");
  const prevBtn = document.querySelector(".modal .prev");
  const nextBtn = document.querySelector(".modal .next");

  const segundoCarrusel = document.querySelectorAll(".estudios-carrusel")[1];
  const imagenes = segundoCarrusel.querySelectorAll("img");

  let indiceActual = 0;

  imagenes.forEach((img, i) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      caption.innerHTML = img.alt;
      indiceActual = i;
    });
  });

  function mostrarImagen(index) {
    if (index < 0) index = imagenes.length - 1;
    if (index >= imagenes.length) index = 0;
    indiceActual = index;
    modalImg.src = imagenes[indiceActual].src;
    caption.innerHTML = imagenes[indiceActual].alt;
  }

  spanCerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  prevBtn.addEventListener("click", () => mostrarImagen(indiceActual - 1));
  nextBtn.addEventListener("click", () => mostrarImagen(indiceActual + 1));

  document.addEventListener("keydown", (e) => {
    if (modal.style.display === "flex") {
      if (e.key === "ArrowLeft") {
        mostrarImagen(indiceActual - 1);
      } else if (e.key === "ArrowRight") {
        mostrarImagen(indiceActual + 1);
      } else if (e.key === "Escape") {
        modal.style.display = "none";
      }
    }
  });
});


// Limpio el formulario de contacto y muestro el mensaje de enviado
const form = document.querySelector(".form-contacto");
const btn = document.querySelector(".btn-enviar-mensaje");
const cartel = document.getElementById("mensaje-exito");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  cartel.style.display = "block";

  form.reset();

  setTimeout(() => {
    cartel.style.display = "none";
  }, 3000);
});
