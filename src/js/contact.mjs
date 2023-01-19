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
    })
        .then(() => {
            console.log('Successfully submitted!');
        })
        .catch((error) => alert(error));
}

document
    .querySelector('form')
    .addEventListener('submit', handleSubmit);

setTimeout(() => {
    clearForm();
    homePageContent();
    pageContactPopup.classList.remove('hidden');
    pageContactPopup.style.display = 'block';
}, 350)


// Reset Contact Form on Window Reload / Refresh
export function clearForm() {
    for (let i = 0; i < document.forms.length; i++) {
        document.forms[i].reset();
        // console.log(document.forms[i])
    }
    document.querySelector('#message').value = '';
}


// Close Successfully Submitted Contact Popup
/*
let popups = document.querySelectorAll('.popup');
let closePopupButtons = document.querySelectorAll('.close-popup-btn');
for (let i = 0; i < closePopupButtons.length; i++) {
    closePopupButtons[i].addEventListener('click', () => {
        for (let j = 0; j < popups.length; j++) {
            popups[j].style.display = 'none';
        }
    })
}

 */