import './main.css'

console.log("HELLO");


/* reset contact form on window reload/refresh */
import {clearForm} from "./src/js/contact.mjs";
clearForm(window.onload);