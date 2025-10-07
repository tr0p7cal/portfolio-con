document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('main-nav');
    

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });


    const navLinks = document.querySelectorAll('#main-nav a');


    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (nav.classList.contains('is-active')) {

                hamburger.classList.remove('is-active');
                nav.classList.remove('is-active');
            }
        });
    });
});