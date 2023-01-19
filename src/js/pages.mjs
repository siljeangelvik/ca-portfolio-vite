/**
 * buttons changes the page content without reloading the browser window
 * @type {HTMLElement[]}
 */
export const sections = [
    document.getElementById('home'),
    document.getElementById('about'),
    document.getElementById('portfolio'),
    document.getElementById('contact')
];

document.body.style.background = '#134e4a';

document.getElementById('home-btn').addEventListener('click', () => {
    sections[1].style.display = 'none';
    sections[2].style.display = 'none';
    sections[3].style.display = 'none';

    document.body.style.transition = 'all 1s ease-out';
    document.body.classList.remove('bg-primary');
    document.body.style.background = '#134e4a';
    sections[0].style.display = 'block';
});

document.getElementById('about-btn').addEventListener('click', () => {
    sections[0].style.display = 'none';
    sections[2].style.display = 'none';
    sections[3].style.display = 'none';

    document.body.style.transition = 'all 1s ease-out';
    document.body.style.background = '#1a1a1a';
    document.body.style.backgroundImage = "url('../../public/assets/bw-code-wp.png')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = "cover";


    sections[1].style.display = 'block';
});

document.getElementById('portfolio-btn').addEventListener('click', () => {
    sections[0].style.display = 'none';
    sections[1].style.display = 'none';
    sections[3].style.display = 'none';

    document.body.style.transition = 'all 1s ease-out';
    document.body.style.background = '#0f766e';
    sections[2].style.display = 'block';
});




document.getElementById('contact-btn').addEventListener('click', () => {
    sections[0].style.display = 'none';
    sections[1].style.display = 'none';
    sections[2].style.display = 'none';

    document.body.style.transition = 'all 1s ease-out';
    document.body.style.background = '#115e59';
    sections[3].style.display = 'block';
});

/*
const menuButtons = document.querySelectorAll('button[type=button]');
menuButtons.style.background = '#134e4a';
menuButtons.style.border = 'none';
 */

