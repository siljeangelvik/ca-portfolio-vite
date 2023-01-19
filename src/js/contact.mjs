export const pageContactPopup = document.querySelector('.contact-popup');


/* submit handler for form */
const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams(formData).toString(),
    }).then(() => {
        console.log("clicked submit");

        pageContactPopup.style.display = 'block';
       clearForm();

    })
        .catch((error) => alert(error));
};

document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);


/* close contact popup */
let popups = document.querySelectorAll('.popup');
let closePopupButtons = document.querySelectorAll('.close-popup-btn');
for (let i = 0; i < closePopupButtons.length; i++) {
    closePopupButtons[i].addEventListener('click', () => {
        for (let j = 0; j < popups.length; j++) {
            popups[j].style.display = 'none';
        }
    })
}


/* reset contact form on window reload/refresh */
export function clearForm() {
    for (let i = 0; i < document.forms.length; i++) {
         document.forms[i].reset();
        console.log(document.forms[i])
    }
    document.querySelector('#message').value = '';
}