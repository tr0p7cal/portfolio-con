document.addEventListener('DOMContentLoaded', function() {

    // ======================= ARM HOVER INTERACTION =======================
    const armContainer = document.querySelector('.arm-container');
    const armDisplay = document.querySelector('#arm-display');
    const isMobile = window.innerWidth <= 768;

    if (armContainer && armDisplay && !isMobile) {
        // Mouse move parallax effect
        armContainer.addEventListener('mousemove', function(e) {
            const rect = armContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            armContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        armContainer.addEventListener('mouseleave', function() {
            armContainer.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });

        // Touch/swipe detection for mobile
        let touchStartX = 0;
        let touchStartY = 0;
        let isTouching = false;

        armContainer.addEventListener('touchstart', function(e) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            isTouching = true;
        });

        armContainer.addEventListener('touchmove', function(e) {
            if (!isTouching) return;

            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;

            const diffX = Math.abs(touchX - touchStartX);
            const diffY = Math.abs(touchY - touchStartY);

            // If swipe detected, trigger prosthesis view
            if (diffX > 10 || diffY > 10) {
                armContainer.classList.add('touch-active');
                isTouching = false;
            }
        });

        armContainer.addEventListener('touchend', function() {
            isTouching = false;
        });
    }

    // ======================= SCROLL ANIMATIONS =======================
    const techSections = document.querySelectorAll('.tech-section');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });

    techSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // ======================= SCROLL PROGRESS =======================
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const heroSection = document.querySelector('.hero-section');

    window.addEventListener('scroll', function() {
        const heroBottom = heroSection.getBoundingClientRect().bottom;

        if (heroBottom < window.innerHeight * 0.8) {
            scrollIndicator?.style.setProperty('opacity', '0');
        } else {
            scrollIndicator?.style.setProperty('opacity', '1');
        }
    });

    // ======================= SMOOTH SCROLL FOR ANCHOR LINKS =======================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ======================= PARALLAX EFFECT ON SCROLL =======================
    let ticking = false;

    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroElements = document.querySelectorAll('.hero-title, .arm-display');

        heroElements.forEach((element, index) => {
            const speed = index === 0 ? 0.3 : 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });

        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // ======================= TIMELINE ANIMATION =======================
    const timelineItems = document.querySelectorAll('.timeline-item');

    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 200);
            }
        });
    }, {
        threshold: 0.5
    });

    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        timelineObserver.observe(item);
    });

    // ======================= TECH CARD ANIMATIONS =======================
    const techCards = document.querySelectorAll('.tech-card');

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.2
    });

    techCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        cardObserver.observe(card);
    });

    // ======================= SENSOR ANIMATION ENHANCEMENTS =======================
    const sensorPulse = document.querySelectorAll('.sensor-pulse, .sensor-glow');

    // Add random timing to make it more organic
    sensorPulse.forEach(sensor => {
        const randomDelay = Math.random() * 2;
        sensor.style.animationDelay = `-${randomDelay}s`;
    });

    // ======================= CURSOR EFFECT =======================
    const quantumGrid = document.querySelector('.quantum-grid');
    if (quantumGrid) {
        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX / window.innerWidth;
            mouseY = e.clientY / window.innerHeight;

            quantumGrid.style.backgroundPosition = `
                0 0,
                ${mouseX * 40}px ${mouseY * 40}px,
                ${mouseX * 40}px ${mouseY * 40}px
            `;
        });
    }

    // ======================= PERFORMANCE OPTIMIZATION =======================
    // Pause animations when not in view
    const animationElements = document.querySelectorAll('.sensor-animation, .neural-animation, .material-animation');

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const animations = entry.target.querySelectorAll('*, *::before, *::after');
            animations.forEach(el => {
                if (entry.isIntersecting) {
                    el.style.animationPlayState = 'running';
                } else {
                    el.style.animationPlayState = 'paused';
                }
            });
        });
    }, {
        threshold: 0.1
    });

    animationElements.forEach(el => {
        animationObserver.observe(el);
    });

    // ======================= KEYBOARD NAVIGATION =======================
    document.addEventListener('keydown', function(e) {
        // Arrow keys for smooth scroll
        const scrollAmount = 300;

        if (e.key === 'ArrowDown') {
            window.scrollBy({
                top: scrollAmount,
                behavior: 'smooth'
            });
        } else if (e.key === 'ArrowUp') {
            window.scrollBy({
                top: -scrollAmount,
                behavior: 'smooth'
            });
        }
    });

    // ======================= INITIAL REVEAL =======================
    // Trigger initial animations on page load
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

});
