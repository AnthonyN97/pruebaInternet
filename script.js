//ulr del fondo:
const backgroundUrl = 'https://wallpapers.com/images/featured/1920x1080-aesthetic-glrfk0ntspz3tvxg.webp'; 
// Aquí defines solo el ID del video
const youtubeVideoId = 'Cunvu8b7rj0';


document.getElementById('body').style.backgroundImage = `url(${backgroundUrl})`;

const youtubeUrl = `https://www.youtube.com/embed/${youtubeVideoId}?fs=0&autoplay=1&rel=0&showinfo=0&modestbranding=1&controls=0&loop=1`;
document.getElementById('videoYoutube').src = youtubeUrl;
