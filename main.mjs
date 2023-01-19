import './main.css'

console.log("HELLO");



/* reset contact form on window reload/refresh */
import {clearForm} from "./src/js/contact.mjs";
clearForm();

/* call to action > contact */
document.querySelector('.cta-contact-btn').addEventListener('click', () => {
    document.querySelector('.contact-popup').style.display = 'block';
});