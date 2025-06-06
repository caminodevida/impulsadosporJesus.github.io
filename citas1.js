//carrucel cuerpo
  const messages = [
    'Dios te ama con amor eterno. <br><small><em>— Jeremías 31:3</em></small>',
    'Eres valioso y precioso a sus ojos. <br><small><em>— Isaías 43:4</em></small>',
    'Nada podrá separarnos del amor de Dios. <br><small><em>— Romanos 8:38-39</em></small>',
    'Fuiste creado con propósito. <br><small><em>— Efesios 2:10</em></small>',
    'El Señor está contigo dondequiera que vayas. <br><small><em>— Josué 1:9</em></small>',
    'Yo estoy contigo todos los días, hasta el fin del mundo. <br><small><em>— Mateo 28:20</em></small>',
    'Jehová está cerca de los quebrantados de corazón. <br><small><em>— Salmo 34:18</em></small>',
    'Te tengo esculpido en la palma de mi mano. <br><small><em>— Isaías 49:16</em></small>',
    'Porque yo sé los planes que tengo para ti. <br><small><em>— Jeremías 29:11</em></small>',
    'En su amor eterno, Él no te dejará. <br><small><em>— Deuteronomio 31:6</em></small>'
  ];

  let messageIndex = 0;
  const messageEl = document.getElementById('biblical-message');

  function showMessage() {
    messageEl.style.opacity = 0;
    messageEl.style.transform = 'translateY(20px)';
    setTimeout(() => {
      messageEl.innerHTML = messages[messageIndex];
      messageEl.style.opacity = 1;
      messageEl.style.transform = 'translateY(0)';
      messageIndex = (messageIndex + 1) % messages.length;
    }, 400); // tiempo de fade-out
  }

  showMessage();
  
  setInterval(showMessage, 15000);

//img para fondo
  const backgrounds = [
    'url("fondo1.jpeg")',
    'url("fondo2.jpeg")',
    'url("fondo3.jpeg")'
  ];

  let bgIndex = 0;
  const messageBox = document.getElementById('biblical-message');

  function updateBackground() {
    messageBox.style.backgroundImage = backgrounds[bgIndex];
    bgIndex = (bgIndex + 1) % backgrounds.length;
  }

  updateBackground();
  setInterval(updateBackground, 15000);