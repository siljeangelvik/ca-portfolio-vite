import './main.css'

console.log("HELLO");



/* reset contact form on window reload/refresh */
import {clearForm} from "./src/js/contact.mjs";
clearForm();


import {homePageContent,aboutPageContent,portfolioPageContent,contactPageContent} from "./src/js/pages.mjs";

/* POPUP MODALS */
/* all buttons with class "download-file-btn" will display modal */
[...document.querySelectorAll('.download-file-btn')].forEach(function(download) {
    download.addEventListener('click', function() {
        document.querySelector('.download-popup').style.display = 'block';
    });
});

/* buttons with class: close-popup-btn,
will close modal with class: download-popup */
[...document.querySelectorAll('.close-popup-btn')].forEach(function(download) {
    download.addEventListener('click', function() {
        document.querySelector('.download-popup').style.display = 'none';
    });
});



/* all buttons with class "home-page-button" will run function homePageContent */
[...document.querySelectorAll('.home-page-btn')].forEach(function(home) {
    home.addEventListener('click', function() {
        homePageContent();
    });
});

/* all buttons with class "about-page-button" will run function aboutPageContent */
[...document.querySelectorAll('.about-page-btn')].forEach(function(about) {
    about.addEventListener('click', function() {
        aboutPageContent();
    });
});

/* all buttons with class "portfolio-page-button" will run function portfolioPageContent */
[...document.querySelectorAll('.portfolio-page-btn')].forEach(function(portfolio) {
    portfolio.addEventListener('click', function() {
        portfolioPageContent();
    });
});

/* all buttons with class "contact-page-button" will run function contactPageContent */
[...document.querySelectorAll('.contact-page-btn')].forEach(function(contact) {
    contact.addEventListener('click', function() {
        contactPageContent();
    });
});