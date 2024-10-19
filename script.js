//Seccion de los trofeos
document.addEventListener("DOMContentLoaded", function () {
  const trofeos = [
    { nombre: "Trofeo del mejor cliente", descripcion: "Premio al mejor rendimiento", emoji: "🥇" },
    { nombre: "Trofeo de Plata", descripcion: "Premio al segundo lugar", emoji: "🥈" },
    { nombre: "Trofeo de Bronce", descripcion: "Premio al tercer lugar", emoji: "🥉" },
    { nombre: "Trofeo de Participación", descripcion: "Premio a la participación", emoji: "🏆" },
    { nombre: "Trofeo de Esfuerzo", descripcion: "Premio al esfuerzo", emoji: "🏆" },
  ];

  const container = document.getElementById("trofeos");

  trofeos.forEach(trofeo => {
    const item = document.createElement("div");
    item.className = "trofeo";
    item.innerHTML = `
            <span class="emoji">${trofeo.emoji}</span>
            <div>
                <div class="nombre">${trofeo.nombre}</div>
                <div class="descripcion">${trofeo.descripcion}</div>
            </div>
        `;
    container.appendChild(item);
  });
});

//Seccion de los slides

let iID, currentSlide = 1, totalSlides = 4;

const SlideShow = (run) => (
  run ? 
    (iID = setInterval(() => {
      currentSlide = (currentSlide % totalSlides) + 1;
      document.querySelector('#slide_' + currentSlide).checked = true;
      changeSlide(currentSlide - 1);  // Cambiar el slide visualmente
    }, 2000)) : clearInterval(iID)
);

document.addEventListener('DOMContentLoaded', (event) => {
  const play = document.querySelector('#play');
  play.checked = true; // Start with play checked
  SlideShow(true); // Start the slideshow
});

const autoSlideShow = (checkbox) => SlideShow(checkbox.checked);

// Función para cambiar el slide visualmente
const changeSlide = (index) => {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, slideIndex) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
};

// Cambiar de slide manualmente con los controles
const controls = document.querySelectorAll('input[name="controls"]');
controls.forEach((control, index) => {
  control.addEventListener('change', () => {
    changeSlide(index); // Cambiar el slide visualmente
  });
});