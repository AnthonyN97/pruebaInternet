//listas
const urls = 'https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/462787172_1127566562275453_8540253778161777727_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH4GkMDtyZCvhJlDbolyQIQXdAvWqgtl1Nd0C9aqC2XU7xKN-aBR2E-kkSX576H0ZMLQf4y_YyLU5Tp_gQyFrmt&_nc_ohc=HJSZPJf7YaUQ7kNvgHXGoan&_nc_ht=scontent.faqp3-1.fna&_nc_gid=Ax_-tkhzLcv_H71dG9PFfLk&oh=00_AYCwz47zGVnTVloDzX8Mp1LGRHj2XOS2-Hc_JctWA4OeLg&oe=671B052E,https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/462711287_1128225752209534_4836917110832899732_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEu-k2iHxb7krvU2y9feA1JzdU7HnJ3GfHN1TsecncZ8atIKXEQg84Kib9cIUGe77kD9aZOk9jZWQ7rwE3J4Shr&_nc_ohc=QMW6vb5BYWkQ7kNvgFTErJ8&_nc_ht=scontent.faqp3-1.fna&_nc_gid=Ar5kuN-9mcX2E7xasdKnJAv&oh=00_AYCtpn9s8fuj1hQFn_3Wadg0o-LY94qUXmAkOpK7UuqbMQ&oe=671B0922,https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-1/454908537_1083298923368884_5031723277163585488_n.jpg?stp=c137.0.693.693a_dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeF_1mJ5utXBsgckYJmzi0VVf5AsNNdzK-x_kCw013Mr7PE5EfpGBBtAC2kviGGBLZpFpFHOfCts-grr-o-BdTH6&_nc_ohc=QfAzN3tDjp0Q7kNvgEZ_os8&_nc_ht=scontent.faqp3-1.fna&_nc_gid=Ai6_5UxwKGJjKnr8tnwlzo3&oh=00_AYAl_egCWo5cBkxuNjTVxiulPdIYgOTlwSrCwL1BuVtMTg&oe=671AE55A,https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/321785108_6540848099263568_2178004762697756724_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHETySCB-ZRd4cCk_uUoUvxc0AUzzYaFVVzQBTPNhoVVVgia5-Mj57DsDRzzYCJEXIqn7MrD4mNAVHBCu-TtFw4&_nc_ohc=XvwKRjlehkoQ7kNvgHjTqPy&_nc_ht=scontent.faqp3-1.fna&_nc_gid=Ai6_5UxwKGJjKnr8tnwlzo3&oh=00_AYAXE4zShqu5mZXLM2pFM14BCrNibzzvNqUjHKZIvRQnuA&oe=671B079C';

const urlsArray = urls.trim().split(',');
const imagenes = urlsArray.map((url, index) => ({
    src: url.trim(),
    alt: `Evento ${index + 1}`
}));

const trofeos = [
  { nombre: "Trofeo del mejor cliente", descripcion: "Premio al mejor rendimiento", emoji: "🥇" },
  { nombre: "Trofeo de Plata", descripcion: "Premio al segundo lugar", emoji: "🥈" },
  { nombre: "Trofeo de Bronce", descripcion: "Premio al tercer lugar", emoji: "🥉" },
  { nombre: "Trofeo de Participación", descripcion: "Premio a la participación", emoji: "🏆" },
  { nombre: "Trofeo de Esfuerzo", descripcion: "Premio al esfuerzo", emoji: "🏆" },
  { nombre: "Trofeo de Esfuerzo", descripcion: "Premio al esfuerzo", emoji: "🏆" },
  { nombre: "Trofeo de Participación", descripcion: "Premio a la participación", emoji: "🏆" },
];

//Seccion de los trofeos
document.addEventListener("DOMContentLoaded", function () {
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

let iID, currentSlide = 1, totalSlides = imagenes.length;
// Función para iniciar/detener el slideshow
const SlideShow = (run) => {
  if (run) {
    iID = setInterval(() => {
      currentSlide = (currentSlide % totalSlides) + 1;
      document.querySelector('#slide_' + currentSlide).checked = true;
      changeSlide(currentSlide - 1);  // Cambiar el slide visualmente
    }, 2000);
  } else {
    clearInterval(iID);
  }
};

// Función para manejar el autoplay
const autoSlideShow = (checkbox) => {
  SlideShow(checkbox.checked);
};

// Función para cambiar el slide visualmente
const changeSlide = (index) => {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, slideIndex) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
};

// Sección del carrusel de imágenes y controles
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".slides");
  const controlsContainer = document.querySelector(".controls");

  imagenes.forEach((imagen, index) => {
    // Crear los slides
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.innerHTML = `
      <div class="slide__content">
        <img class="imageCarrousel" src="${imagen.src}" alt="${imagen.alt}">
      </div>
    `;
    container.appendChild(slide);

    // Crear los controles (radio buttons)
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "controls";
    radioInput.id = `slide_${index + 1}`;
    radioInput.onchange = () => {
      changeSlide(index); // Cambiar el slide visualmente
      clearInterval(iID); // Pausar el autoplay si cambia manualmente
      document.querySelector('#play').checked = false; // Desmarcar autoplay
    };

    if (index === 0) {
      radioInput.checked = true; // Marcar el primer control por defecto
    }

    const label = document.createElement("label");
    label.htmlFor = `slide_${index + 1}`;
    label.className = "control";
    label.innerHTML = `<p></p>`;

    controlsContainer.appendChild(radioInput);
    controlsContainer.appendChild(label);
  });

  // Crear el control de autoplay
  const playCheckbox = document.createElement("input");
  playCheckbox.type = "checkbox";
  playCheckbox.id = "play";
  playCheckbox.onchange = () => autoSlideShow(playCheckbox);

  const playLabel = document.createElement("label");
  playLabel.htmlFor = "play";
  playLabel.className = "control__play";
  playLabel.innerHTML = `
    <svg class="progressbar" viewBox="0 0 160 160">
      <circle cx="70" cy="70" r="70" class="progressbar__svg shadow"></circle>
      <polygon points="70,50 110,80 70,110" fill="currentColor" class="svg__pause"></polygon>
      <rect x="60" y="50" width="15" height="60" fill="currentColor" class="svg__play"></rect>
      <rect x="85" y="50" width="15" height="60" fill="currentColor" class="svg__play"></rect>
    </svg>
  `;

  controlsContainer.appendChild(playCheckbox);
  controlsContainer.appendChild(playLabel);
});

//Comenzar con el autoplay activado
document.addEventListener('DOMContentLoaded', (event) => {
  const playCheckbox = document.querySelector('#play');
  playCheckbox.checked = true;
  SlideShow(true);
});
