document.addEventListener('DOMContentLoaded', function() {
    
    // --- YOUR EXISTING MENU CODE ---
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('#main-nav a');

    function closeMenu() {
        if (hamburger) {
            hamburger.classList.remove('is-active');
        }
        if (nav) {
            nav.classList.remove('is-active');
        }
    }

    function toggleMenu() {
        hamburger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    }

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });


    // --- TRANSLATION DATA ---
    const LANGUAGE_STORAGE_KEY = 'preferredLanguage';

    const translations = {
        de: {
            // Nav & Hero
            nav_home: "Home",
            nav_projects: "Projekte",
            nav_cv: "Lebenslauf",
            nav_contact: "Kontakt",
            hero_btn_projects: "Projekte",
            hero_btn_cv: "Lebenslauf",
            hero_btn_contact: "Kontakt",

            // Projects
            projects_title: "Meine Projekte",
            proj_ttt_title: "Tic Tac Toe",
            proj_ttt_desc: "In diesem Projekt habe ich zum ersten Mal mit Python und Pygame programmiert.",
            proj_web_title: "Personal Website",
            proj_web_desc: "Hier findet man den Code für diese Website. Mit diesem Projekt habe ich meine HTML und CSS Kenntnisse wieder aufgefrischt.",
            btn_github: "Zum GitHub Repo",
            
            proj_current_title: "Aktuelle Projekte",
            proj_stock_title: "Python Stock Alert System:",
            proj_stock_desc: "Entwicklung einer automatisierten Data-Mining-Pipeline für Finanzdaten. Ein eigens geschriebener Python-Algorithmus überwacht Aktienkurse via Web Scraping in Echtzeit. Sobald ein definierter Zielwert erreicht wird, löst das Backend automatisch eine Benachrichtigung via SMTP (E-Mail) aus.",
            proj_nas_title: "NAS Home Server",
            btn_coming_soon: "Coming Soon",

            // CV - Education
            cv_teaser: "Meinen Lebenslauf kannst du hier herunterladen - verfügbar auf Deutsch und Englisch.",
            cv_btn: "Zum Lebenslauf",
            cv_token_info: "Um den Lebenslauf herunterzuladen, benötigst du einen persönlichen Token. Diesen kannst du per E-Mail bei mir anfragen.",
            cv_confirm_btn: "Bestätigen",
            cv_download_de: "Lebenslauf Deutsch (PDF)",
            cv_download_en: "CV English (PDF)",
            cv_request_info: "Noch kein Token? Hier kannst du einen anfragen.",
            cv_request_btn: "Token anfragen",
            cv_request_success: "Anfrage gesendet! Schau in deine Emails.",
            cv_request_error: "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
            cv_request_missing_fields: "Bitte gib deinen Namen und deine E-Mail-Adresse ein.",
            cv_request_invalid_email: "Bitte gib eine gültige E-Mail-Adresse ein.",
            cv_request_message_placeholder: "Nachricht (optional)",
            request_name_label: "Name",
            request_email_label: "E-Mail",
            request_message_label: "Nachricht (optional)",
            cv_token_error_invalid: "Ungültiger Token. Bitte erneut versuchen.",
            cv_token_error_missing: "Bitte gib zuerst einen gültigen Token ein.",
            cv_token_error_request: "Validierung aktuell nicht möglich. Bitte versuche es erneut.",

            // CV - Education
            cv_cat_education: "Ausbildung",
            cv_edu_tum_title: "TUM – Technische Universität München",
            cv_edu_tum_desc: "B.Sc. in Elektrotechnik und Informationstechnik (vsl. Abschluss 2027)",
            cv_edu_tum_date: "10/2024 – heute",
            
            cv_edu_globe_title: "Globe Business College",
            cv_edu_globe_desc: "Business Workshop Wochenende, gewählter Teamkapitän. Ausgewählt als Teilnehmer durch den Schulleiter des Privatgymnasiums Holzkirchen.",
            cv_edu_globe_date: "10/2023",

            cv_edu_school_title: "Privatgymnasium Holzkirchen",
            cv_edu_school_desc: "Allgemeine Hochschulreife (Abitur), Endnote 1,5. Abiturprüfungen in Mathematik, Deutsch, Englisch, Informatik und Religionslehre.",
            cv_edu_school_date: "01/2018 – 06/2024",

            cv_edu_brighton_title: "Brighton Primary School",
            cv_edu_brighton_desc: "Klassen 3, 5 & 6. Abschluss.",
            cv_edu_brighton_date: "01/2015 – 12/2017",

            // CV - Cities (Used multiple times)
            city_munich: "München, Deutschland",
            city_holzkirchen: "Holzkirchen, Deutschland",
            city_melbourne: "Melbourne, Australien",
            city_nuremberg: "Nürnberg, Deutschland",
            city_sachsenkam: "Sachsenkam, Deutschland",

            // CV - Work
            cv_cat_work: "Arbeitserfahrung",
            
            cv_work_infineon_title: "Infineon Technologies AG",
            cv_sub_internship: "Praktikum",
            cv_work_infineon_desc: "LDMOS-Modellierung, Automatisierungssoftware, intelligente Filter",
            
            cv_work_sellwerk_title: "SELLWERK New Businesses",
            cv_sub_student_intern: "Schülerpraktikum",
            cv_work_sellwerk_desc: "Erstellung verschiedener Websites (HTML, CSS, GitHub)",
            
            cv_work_hawe_title: "HAWE Hydraulik",
            cv_sub_student_ind: "Schülerpraktikum – Industriegüter",
            cv_work_hawe_desc: "Bau eines solarbetriebenen Windrads",
            
            cv_work_fraunhofer_title: "Fraunhofer Institut für Bauphysik IBP",
            cv_work_fraunhofer_desc: "IT-Support",

            // CV - Skills
            cv_cat_skills: "Fähigkeiten & Interessen",
            cv_skill_lang_title: "Sprachen:",
            cv_skill_lang_desc: "Deutsch (Muttersprache), Englisch (fließend, Cambridge Zertifikat C1, 196/200), Französisch (Grundkenntnisse)",
            
            cv_skill_tech_title: "Technische Fähigkeiten:",
            cv_skill_tech_desc1: "Grundlagen Coding (Java, C/C++, Python, MATLAB)",
            cv_skill_tech_desc3: "Microsoft Office Suite",
            
            cv_skill_sport_title: "Sport:",
            cv_skill_sport_desc1: "Feldhockey (seit 2011); Kapitän 1. Herrenmannschaft Höhenkirchen (seit Sept. 2024)",
            cv_skill_sport_desc2: "Snowboard, Fußball, Basketball, Rocket League (Top 10% weltweit)",
            
            cv_skill_interest_title: "Interessen:",
            cv_skill_interest_desc1: "Technologien und ihre Anwendungen",
            cv_skill_interest_desc2: "Lesen",
            cv_skill_interest_desc3: "Politik",

            // Contact & Footer
            contact_title: "Kontakt",
            footer_text: "© 2025 Constantin Eichhorn. Alle Rechte vorbehalten."
        },
        en: {
            // Nav & Hero
            nav_home: "Home",
            nav_projects: "Projects",
            nav_cv: "CV",
            nav_contact: "Contact",
            hero_btn_projects: "Projects",
            hero_btn_cv: "CV",
            hero_btn_contact: "Contact",

            // Projects
            projects_title: "My Projects",
            proj_ttt_title: "Tic Tac Toe",
            proj_ttt_desc: "In this project, I programmed with Python and Pygame for the first time.",
            proj_web_title: "Personal Website",
            proj_web_desc: "Here you can find the code for this website. With this project I refreshed my HTML and CSS knowledge.",
            btn_github: "Go to GitHub Repo",
            
            proj_current_title: "Current Projects",
            proj_stock_title: "Python Stock Alert System:",
            proj_stock_desc: "Development of an automated data mining pipeline for financial data. A custom Python algorithm monitors stock prices via web scraping in real time. As soon as a defined target value is reached, the backend automatically triggers a notification via SMTP (email).",
            proj_nas_title: "NAS Home Server",
            btn_coming_soon: "Coming Soon",

            // CV - Education
            cv_teaser: "You can download my CV here - available in German and English.",
            cv_btn: "View CV",
            cv_token_info: "To download the CV, you need a personal token. You can request one by contacting me via email.",
            cv_confirm_btn: "Confirm",
            cv_download_de: "Lebenslauf Deutsch (PDF)",
            cv_download_en: "CV English (PDF)",
            cv_request_info: "No token yet? You can request one here.",
            cv_request_btn: "Request token",
            cv_request_success: "Request sent! Check your emails.",
            cv_request_error: "Something went wrong. Please try again.",
            cv_request_missing_fields: "Please enter your name and email address.",
            cv_request_invalid_email: "Please enter a valid email address.",
            cv_request_message_placeholder: "Message (optional)",
            request_name_label: "Name",
            request_email_label: "Email",
            request_message_label: "Message (optional)",
            cv_token_error_invalid: "Invalid token. Please try again.",
            cv_token_error_missing: "Please enter a valid token first.",
            cv_token_error_request: "Validation is currently unavailable. Please try again.",

            // CV - Education
            cv_cat_education: "Education",
            cv_edu_tum_title: "TUM – Technical University of Munich",
            cv_edu_tum_desc: "B.Sc. in Electrical Engineering and Information Technology (expected graduation in 2027)",
            cv_edu_tum_date: "10/2024 – present",
            
            cv_edu_globe_title: "Globe Business College",
            cv_edu_globe_desc: "Business Workshop Weekend, elected Team Captain. Chosen as participant by the Dean of Privatgymnasium Holzkirchen.",
            cv_edu_globe_date: "10/2023",

            cv_edu_school_title: "Privatgymnasium Holzkirchen",
            cv_edu_school_desc: "University Entrance Qualification (Abitur), final grade 1.5. Final exams in Mathematics, German, English, Computer Science and Religious Education.",
            cv_edu_school_date: "01/2018 – 06/2024",

            cv_edu_brighton_title: "Brighton Primary School",
            cv_edu_brighton_desc: "Years 3, 5 & 6. Graduation.",
            cv_edu_brighton_date: "01/2015 – 12/2017",

            // CV - Cities
            city_munich: "Munich, Germany",
            city_holzkirchen: "Holzkirchen, Germany",
            city_melbourne: "Melbourne, Australia",
            city_nuremberg: "Nuremberg, Germany",
            city_sachsenkam: "Sachsenkam, Germany",

            // CV - Work
            cv_cat_work: "Work Experience",
            
            cv_work_infineon_title: "Infineon Technologies AG",
            cv_sub_internship: "Internship",
            cv_work_infineon_desc: "LDMOS modeling, automation software, intelligent filter",
            
            cv_work_sellwerk_title: "SELLWERK New Businesses",
            cv_sub_student_intern: "Student Internship",
            cv_work_sellwerk_desc: "Built various websites (HTML, CSS, GitHub)",
            
            cv_work_hawe_title: "HAWE Hydraulik",
            cv_sub_student_ind: "Student Internship – Industrial goods",
            cv_work_hawe_desc: "Built a solar powered wind turbine",
            
            cv_work_fraunhofer_title: "Fraunhofer Institute for Building Physics IBP",
            cv_work_fraunhofer_desc: "IT support",

            // CV - Skills
            cv_cat_skills: "Skills & Interests",
            cv_skill_lang_title: "Languages:",
            cv_skill_lang_desc: "German (mother tongue), English (fluent, Cambridge Certificate C1, 196/200), French (basics)",
            
            cv_skill_tech_title: "Technical Skills:",
            cv_skill_tech_desc1: "Basic Coding (Java, C/C++, Python, MATLAB)",
            cv_skill_tech_desc3: "Microsoft Office Suite",
            
            cv_skill_sport_title: "Sports:",
            cv_skill_sport_desc1: "Field Hockey (since 2011); Captain 1st men's team Höhenkirchen (since Sept. 2024)",
            cv_skill_sport_desc2: "Snowboard, Football, Basketball, Rocket League (90th percentile worldwide)",
            
            cv_skill_interest_title: "Interests:",
            cv_skill_interest_desc1: "Technologies and their applications",
            cv_skill_interest_desc2: "Reading",
            cv_skill_interest_desc3: "Politics",

            // Contact & Footer
            contact_title: "Contact",
            footer_text: "© 2025 Constantin Eichhorn. All rights reserved."
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
            // Ignore storage failures and keep the in-memory language state.
        }
    }

    function updateLanguageButtons(lang, showVisualState = false) {
        const resolvedLang = normalizeLanguage(lang);

        document.querySelectorAll('.lang-btn').forEach(button => {
            const isActive = resolvedLang === 'en'
                ? button.classList.contains('btn-en')
                : button.classList.contains('btn-de');

            button.classList.toggle('is-active', showVisualState && isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
    }

    // --- FUNCTION TO CHANGE LANGUAGE ---
    function changeLanguage(lang, showVisualState = false) {
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
        
        // Optional: Change the HTML lang attribute (good for SEO)
        document.documentElement.lang = resolvedLang;
        updateLanguageButtons(resolvedLang, showVisualState);
        saveLanguage(resolvedLang);
    }

    let currentCvToken = null;

    function getTranslationValue(key) {
        const activeLang = document.documentElement.lang === 'en' ? 'en' : 'de';
        if (translations[activeLang] && translations[activeLang][key]) {
            return translations[activeLang][key];
        }
        return translations.de[key] || '';
    }

    function showTokenError(key) {
        const tokenError = document.getElementById('token-error');
        if (!tokenError) {
            return;
        }
        tokenError.textContent = getTranslationValue(key);
        tokenError.style.display = 'block';
    }

    function setRequestMessageVisibility({ showForm = true, showSuccess = false, showError = false } = {}) {
        const requestForm = document.getElementById('request-form');
        const requestSuccess = document.getElementById('request-success');
        const requestError = document.getElementById('request-error');

        if (requestForm) {
            requestForm.style.display = showForm ? 'flex' : 'none';
        }

        if (requestSuccess) {
            requestSuccess.style.display = showSuccess ? 'block' : 'none';
        }

        if (requestError) {
            requestError.style.display = showError ? 'block' : 'none';
        }
    }

    function showRequestMessage(key, isError = true) {
        const requestSuccess = document.getElementById('request-success');
        const requestError = document.getElementById('request-error');
        const target = isError ? requestError : requestSuccess;

        if (!target) {
            return;
        }

        target.textContent = getTranslationValue(key);
        setRequestMessageVisibility({
            showForm: true,
            showSuccess: !isError,
            showError: isError,
        });
    }

    function clearRequestFeedback() {
        setRequestMessageVisibility({ showForm: true, showSuccess: false, showError: false });
    }

    function setCvAccessState(hasAccess) {
        const tokenInput = document.getElementById('token-input');
        const tokenButton = document.getElementById('token-confirm-btn');
        const tokenError = document.getElementById('token-error');
        const downloadSection = document.getElementById('download-section');

        if (!downloadSection) {
            return;
        }

        downloadSection.style.display = hasAccess ? 'block' : 'none';

        if (tokenInput) {
            tokenInput.style.display = hasAccess ? 'none' : 'block';
        }

        if (tokenButton) {
            tokenButton.style.display = hasAccess ? 'none' : 'inline-block';
        }

        if (tokenError && hasAccess) {
            tokenError.style.display = 'none';
        }
    }

    window.validateToken = async function validateToken() {
        const tokenInput = document.getElementById('token-input');
        const tokenError = document.getElementById('token-error');

        if (!tokenInput) {
            return;
        }

        const token = tokenInput.value.trim();

        if (tokenError) {
            tokenError.style.display = 'none';
        }

        if (!token) {
            showTokenError('cv_token_error_missing');
            return;
        }

        try {
            const response = await fetch(`https://download.coneichhorn.de/validate/${encodeURIComponent(token)}`);
            const data = await response.json();

            if (response.ok && data.valid === true) {
                currentCvToken = token;
                setCvAccessState(true);
                return;
            }

            showTokenError('cv_token_error_invalid');
        } catch (error) {
            showTokenError('cv_token_error_request');
        }
    };

    window.downloadCV = function downloadCV(filename) {
        const token = currentCvToken;

        if (!token) {
            showTokenError('cv_token_error_missing');
            return;
        }

        const downloadUrl = `https://download.coneichhorn.de/download/${encodeURIComponent(token)}/${encodeURIComponent(filename)}`;
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = filename;
        link.rel = 'noopener';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    window.requestToken = async function requestToken() {
        const requestName = document.getElementById('request-name');
        const requestEmail = document.getElementById('request-email');
        const requestMessage = document.getElementById('request-message');
        const requestButton = document.getElementById('request-submit-btn');
        const requestForm = document.getElementById('request-form');
        const requestSuccess = document.getElementById('request-success');
        const requestError = document.getElementById('request-error');

        if (!requestName || !requestEmail || !requestMessage || !requestButton || !requestForm || !requestSuccess || !requestError) {
            return;
        }

        const name = requestName.value.trim();
        const email = requestEmail.value.trim();
        const message = requestMessage.value.trim();

        clearRequestFeedback();

        if (!name || !email) {
            showRequestMessage('cv_request_missing_fields', true);
            return;
        }

        if (!requestEmail.checkValidity()) {
            showRequestMessage('cv_request_invalid_email', true);
            return;
        }

        requestButton.disabled = true;
        requestButton.setAttribute('aria-busy', 'true');

        try {
            const response = await fetch('https://download.coneichhorn.de/request-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await response.json();

            if (response.ok && data && data.success === true) {
                requestForm.style.display = 'none';
                requestSuccess.style.display = 'block';
                requestError.style.display = 'none';
                return;
            }

            showRequestMessage('cv_request_error', true);
        } catch (error) {
            showRequestMessage('cv_request_error', true);
        } finally {
            requestButton.disabled = false;
            requestButton.removeAttribute('aria-busy');
        }
    };

    // --- BUTTON EVENT LISTENER (AKTUALISIERT) ---
    
    // Wir suchen ALLE Elemente mit der Klasse .btn-en (sowohl Desktop als auch Mobile)
    const buttonsEn = document.querySelectorAll('.btn-en');
    const buttonsDe = document.querySelectorAll('.btn-de');

    // Schleife durch alle Englischen Buttons
    buttonsEn.forEach(button => {
        button.addEventListener('click', function() {
            changeLanguage('en', true);
            closeMenu(); // Optional: Menü schließen nach Klick (gut für Mobile)
        });
    });

    // Schleife durch alle Deutschen Buttons
    buttonsDe.forEach(button => {
        button.addEventListener('click', function() {
            changeLanguage('de', true);
            closeMenu(); // Optional: Menü schließen nach Klick
        });
    });

    changeLanguage(getStoredLanguage());

    // Initial state for cv.html token flow
    if (document.getElementById('token-input')) {
        setCvAccessState(false);
    }

    window.addEventListener('pagehide', function() {
        currentCvToken = null;
    });

}); 