document.addEventListener('DOMContentLoaded', function() {

    // ======================= NAVIGATION MENU =======================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links a');

    function closeMenu() {
        if (hamburger) {
            hamburger.classList.remove('is-active');
        }
        if (navLinks) {
            navLinks.classList.remove('is-active');
        }
    }

    function toggleMenu() {
        hamburger.classList.toggle('is-active');
        navLinks.classList.toggle('is-active');
    }

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    navLinkItems.forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });

    // ======================= LANGUAGE SYSTEM =======================
    const LANGUAGE_STORAGE_KEY = 'preferredLanguage';

    const translations = {
        de: {
            // Navigation
            nav_home: "Home",
            nav_projects: "Projekte",
            nav_cv: "Lebenslauf",
            nav_contact: "Kontakt",

            // Hero
            hero_eyebrow: "Verfügbar für neue Möglichkeiten",
            hero_title_line1: "Developer &",
            hero_title_line2: "Problem Solver",
            hero_desc: "Ich baue digitale Lösungen – von Python-Automatisierung bis responsive Web-Interfaces.",
            hero_btn_projects: "Projekte →",
            hero_btn_contact: "Kontakt",

            // Projects
            projects_title: "Projekte",
            proj_ttt_title: "Tic Tac Toe",
            proj_ttt_desc: "Erstes Python-Projekt mit Pygame. Klassisches Spiel mit vollständiger Spiellogik.",
            proj_web_title: "Personal Website",
            proj_web_desc: "Diese Website. HTML & CSS Refresher mit responsive Design.",
            proj_stock_title: "Stock Alert System",
            proj_stock_desc: "Automatisierte Data-Mining-Pipeline für Finanzdaten. Echtzeit-Überwachung mit E-Mail-Benachrichtigung.",
            proj_nas_title: "NAS Home Server",
            proj_nas_desc: "Eigener Home-Server mit Storage-Lösung und Security-Hardening.",
            btn_github: "GitHub Repo →",

            // CV
            cv_title: "Lebenslauf",
            cv_teaser: "Meinen Lebenslauf kannst du hier herunterladen – verfügbar auf Deutsch und Englisch.",
            cv_btn: "Zum Lebenslauf →",

            // Contact
            contact_title: "Kontakt",
            contact_intro: "Du hast eine Frage oder möchtest zusammenarbeiten? Schreib mir einfach.",

            // Footer
            footer_text: "© 2026 Constantin Eichhorn. Alle Rechte vorbehalten."
        },
        en: {
            // Navigation
            nav_home: "Home",
            nav_projects: "Projects",
            nav_cv: "CV",
            nav_contact: "Contact",

            // Hero
            hero_eyebrow: "Available for new opportunities",
            hero_title_line1: "Developer &",
            hero_title_line2: "Problem Solver",
            hero_desc: "I build digital solutions – from Python automation to responsive web interfaces.",
            hero_btn_projects: "Projects →",
            hero_btn_contact: "Contact",

            // Projects
            projects_title: "Projects",
            proj_ttt_title: "Tic Tac Toe",
            proj_ttt_desc: "First Python project with Pygame. Classic game with complete game logic.",
            proj_web_title: "Personal Website",
            proj_web_desc: "This website. HTML & CSS refresher with responsive design.",
            proj_stock_title: "Stock Alert System",
            proj_stock_desc: "Automated data mining pipeline for financial data. Real-time monitoring with email notifications.",
            proj_nas_title: "NAS Home Server",
            proj_nas_desc: "Custom home server with storage solution and security hardening.",
            btn_github: "GitHub Repo →",

            // CV
            cv_title: "CV",
            cv_teaser: "Download my CV here – available in German and English.",
            cv_btn: "View CV →",

            // Contact
            contact_title: "Contact",
            contact_intro: "Have a question or want to collaborate? Just send me a message.",

            // Footer
            footer_text: "© 2026 Constantin Eichhorn. All rights reserved."
        }
    };

    function normalizeLanguage(lang) {
        return lang === 'en' ? 'en' : 'de';
    }

    function getStoredLanguage() {
        try {
            return normalizeLanguage(localStorage.getItem(LANGUAGE_STORAGE_KEY));
        } catch (error) {
            return 'de';
        }
    }

    function saveLanguage(lang) {
        try {
            localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
        } catch (error) {
            // Ignore storage failures
        }
    }

    function updateLanguageButtons(lang) {
        const resolvedLang = normalizeLanguage(lang);

        document.querySelectorAll('.lang-btn').forEach(button => {
            const isActive = resolvedLang === 'en'
                ? button.classList.contains('btn-en')
                : button.classList.contains('btn-de');

            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
    }

    function changeLanguage(lang) {
        const resolvedLang = normalizeLanguage(lang);
        const elements = document.querySelectorAll('.lang');

        elements.forEach(element => {
            const key = element.getAttribute('key');
            if (translations[resolvedLang] && translations[resolvedLang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[resolvedLang][key];
                } else {
                    element.textContent = translations[resolvedLang][key];
                }
            }
        });

        document.documentElement.lang = resolvedLang;
        updateLanguageButtons(resolvedLang);
        saveLanguage(resolvedLang);
    }

    // ======================= LANGUAGE BUTTON EVENTS =======================
    const buttonsEn = document.querySelectorAll('.btn-en');
    const buttonsDe = document.querySelectorAll('.btn-de');

    buttonsEn.forEach(button => {
        button.addEventListener('click', function() {
            changeLanguage('en');
            closeMenu();
        });
    });

    buttonsDe.forEach(button => {
        button.addEventListener('click', function() {
            changeLanguage('de');
            closeMenu();
        });
    });

    // Initialize language
    changeLanguage(getStoredLanguage());

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

});
