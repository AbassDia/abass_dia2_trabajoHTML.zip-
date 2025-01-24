document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById('animated-title');

    // Attendez que l'animation de machine à écrire soit terminée
    setTimeout(() => {
        // Ajoutez une classe pour activer l'effet de pulsation
        title.classList.add('pulsate');
    }, 3000); // La durée correspond au temps de l'animation de machine à écrire
});
