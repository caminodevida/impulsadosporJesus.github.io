//carrucel footer
const youngQuotes = [
    'Ninguno tenga en poco tu juventud, sino sé ejemplo de los creyentes... — 1 Timoteo 4:12',
    'No digas: Soy un niño; porque a todo lo que te envíe irás tú... — Jeremías 1:7',
    'Acuérdate de tu Creador en los días de tu juventud... — Eclesiastés 12:1',
    '¿Con qué limpiará el joven su camino? Con guardar tu palabra. — Salmo 119:9',
    'Confía en el Señor con todo tu corazón... — Proverbios 3:5',
    'Esfuérzate y sé valiente. No temas ni desmayes... — Josué 1:9',
    'El Señor está contigo, poderoso guerrero. — Jueces 6:12',
    'Los que esperan a Jehová tendrán nuevas fuerzas... — Isaías 40:31',
    'Creced en la gracia y el conocimiento del Señor... — 2 Pedro 3:18',
    'Bienaventurados los de limpio corazón... — Mateo 5:8'
  ];

  let quoteIndex = 0;
  const carouselEl = document.getElementById('carousel-quotes');

  function showQuote() {
    if (carouselEl) {
      carouselEl.classList.remove('slide-in');
      setTimeout(() => {
        carouselEl.innerHTML = youngQuotes[quoteIndex];
        carouselEl.classList.add('slide-in');
        quoteIndex = (quoteIndex + 1) % youngQuotes.length;
      }, 100);
    }
  }

  // mostrar la primera cita
  showQuote();

  // cambiar cada 60 segundos
  setInterval(showQuote, 20000);
