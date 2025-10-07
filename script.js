document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('main-nav');

    // Klick-Event für das Hamburger-Menü
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });

    // Menü schließen, wenn auf einen Link geklickt wird
    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (nav.classList.contains('is-active')) {
                nav.classList.remove('is-active');
            }
        });
    });
});