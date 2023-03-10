import {homePageContent} from './pages.mjs';

// Submit Handler for Contact Form
let pageContactPopup = document.querySelector('.contact-popup');
const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch('/', {
        method: 'POST',
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams(formData).toString(),
    }).then(() => {
        console.log('Successfully submitted!');
        setTimeout(() => {
            clearForm();
            homePageContent();
            pageContactPopup.classList.remove('hidden');
            pageContactPopup.style.display = 'block';
        }, 350);
    }).catch((error) => alert(error));
}

document
    .querySelector('form')
    .addEventListener('submit', handleSubmit);

// Reset Contact Form on Window Reload / Refresh
export function clearForm() {
    for (let i = 0; i < document.forms.length; i++) {
        document.forms[i].reset();
        // console.log(document.forms[i])
    }
    document.querySelector('#message').value = '';
}