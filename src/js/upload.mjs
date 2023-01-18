const downloadPopup = document.querySelector('.download-popup');
const coverletter = document.getElementById('download-coverletter-pdf');
const resume = document.getElementById('download-resume-pdf');

const downloads = [coverletter, resume];

downloads.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = document.querySelector(".result");
    fetch("/", {
        body: new FormData(event.target),
        method: "POST",
    })
        .then(() => {
            result.innerText = "Success";
        })
        .catch((error) => {
            result.innerText = `Failed: ${error}`;
        });
});


