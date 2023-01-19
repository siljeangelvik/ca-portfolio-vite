/**/
const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
};

document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);


/* reset contact form on window reload/refresh */
export function clearForm() {
    for (let i = 0; i < document.forms.length; i++) {
        document.forms[i].reset();
    }
}