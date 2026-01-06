document.addEventListener('DOMContentLoaded', function() {
    
    // --- YOUR EXISTING MENU CODE ---
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

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });


    // --- TRANSLATION DATA ---
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
            footer_text: "&copy; 2025 Constantin Eichhorn. Alle Rechte vorbehalten."
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
            footer_text: "&copy; 2025 Constantin Eichhorn. All rights reserved."
        }
    };

    // --- FUNCTION TO CHANGE LANGUAGE ---
    function changeLanguage(lang) {
        const elements = document.querySelectorAll('.lang');
        
        elements.forEach(element => {
            const key = element.getAttribute('key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Optional: Change the HTML lang attribute (good for SEO)
        document.documentElement.lang = lang;
    }

    // --- BUTTON EVENT LISTENER (AKTUALISIERT) ---
    
    // Wir suchen ALLE Elemente mit der Klasse .btn-en (sowohl Desktop als auch Mobile)
    const buttonsEn = document.querySelectorAll('.btn-en');
    const buttonsDe = document.querySelectorAll('.btn-de');

    // Schleife durch alle Englischen Buttons
    buttonsEn.forEach(button => {
        button.addEventListener('click', function() {
            changeLanguage('en');
            closeMenu(); // Optional: Menü schließen nach Klick (gut für Mobile)
        });
    });

    // Schleife durch alle Deutschen Buttons
    buttonsDe.forEach(button => {
        button.addEventListener('click', function() {
            changeLanguage('de');
            closeMenu(); // Optional: Menü schließen nach Klick
        });
    });

}); 