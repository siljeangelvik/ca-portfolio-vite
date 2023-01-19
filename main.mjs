import './main.css'
import './src/css/style.css'

// Calling Function to Reset Contact Form Window Reload / Refresh
import {clearForm} from "./src/js/contact.mjs";
clearForm();

// Importing the section "pages"
import {homePageContent, aboutPageContent, portfolioPageContent, contactPageContent} from './src/js/pages.mjs';

// Buttons to Open Popup "Download" Modal
[...document.querySelectorAll('.download-file-btn')].forEach(function (download) {
    download.addEventListener('click', function () {
        document.querySelector('.download-popup').style.display = 'block';
    });
});

// Buttons to Close Popup Modals
[...document.querySelectorAll('.close-popup-btn')].forEach(function (close) {
    close.addEventListener('click', function () {
        document.querySelector('.download-popup').style.display = 'none';
        document.querySelector('.contact-popup').style.display = 'none';
    });
});

// All buttons with class "home-page-button" will run function homePageContent
[...document.querySelectorAll('.home-page-btn')].forEach(function (home) {
    home.addEventListener('click', function () {
        homePageContent();
    });
});

// All buttons with class "about-page-button" will run function aboutPageContent
[...document.querySelectorAll('.about-page-btn')].forEach(function (about) {
    about.addEventListener('click', function () {
        aboutPageContent();
    });
});

// All buttons with class "portfolio-page-button" will run function portfolioPageContent
[...document.querySelectorAll('.portfolio-page-btn')].forEach(function (portfolio) {
    portfolio.addEventListener('click', function () {
        portfolioPageContent();
    });
});

// All buttons with class "contact-page-button" will run function contactPageContent
[...document.querySelectorAll('.contact-page-btn')].forEach(function (contact) {
    contact.addEventListener('click', function () {
        contactPageContent();
    });
});