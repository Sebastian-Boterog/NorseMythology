document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('musicaFondo');
    const boton = document.createElement('button');
    boton.className = 'boton-sonido';
    boton.innerHTML = '🔇';
    document.body.appendChild(boton);

    boton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            boton.innerHTML = '🔊';
        } else {
            audio.pause();
            boton.innerHTML = '🔇';
        }
    });
});