document.addEventListener('DOMContentLoaded', function() {
    
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('#main-nav a');


    function closeMenu() {
        hamburger.classList.remove('is-active');
        nav.classList.remove('is-active');
    }

    function toggleMenu() {
        hamburger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    }

    hamburger.addEventListener('click', toggleMenu);

    navLinks.forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });
});