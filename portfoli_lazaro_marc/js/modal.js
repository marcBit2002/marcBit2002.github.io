// Obtener todos los elementos con la clase portfolio-img
const portfolioImgs = document.querySelectorAll('.portfolio-img');

// Agregar un controlador de eventos click a cada elemento
portfolioImgs.forEach(img => {
  img.addEventListener('click', e => {
    // Obtener la información de los atributos de datos
    const video = e.currentTarget.dataset.video;
    const github = e.currentTarget.dataset.github;
    const descripcion = e.currentTarget.dataset.descripcion;
    const title = e.currentTarget.dataset.title;

    // Obtener los elementos del modal
    const modal = document.querySelector('#miModal');
    const videoElement = modal.querySelector('video');
    const p = modal.querySelector('p');
    const a = modal.querySelector('a');
    const h5 = modal.querySelector('h5')

    // Actualizar el contenido del modal
    videoElement.src = video;

    // Verificar si la miniatura está disponible y asignarla al atributo poster
    if (e.currentTarget.src) {
      videoElement.poster = e.currentTarget.src;
    }

    p.textContent = descripcion;
    a.href = github;
    h5.textContent = title;

    // Agregar evento para detener el video cuando se oculte el modal
    modal.addEventListener('hidden.bs.modal', function() {
      videoElement.pause(); // Pausar el video al ocultar el modal
      videoElement.src = ''; // Limpiar la URL del video para detener la reproducción
    });
  });
});
