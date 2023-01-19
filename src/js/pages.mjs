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

/* DEFAULT ( /HOME ) */
document.body.style.background = '#134e4a';

/* HOME */
export const homePageContent = () => {
    sections[1].style.display = 'none';
    sections[2].style.display = 'none';
    sections[3].style.display = 'none';

    sections[0].style.display = 'block';

    document.body.style.transition = 'all 1s ease-out';
    document.body.style.background = '#134e4a';
}

/* ABOUT */
export const aboutPageContent = () => {
    sections[0].style.display = 'none';
    sections[2].style.display = 'none';
    sections[3].style.display = 'none';

    sections[1].style.display = 'block';

    document.body.style.transition = 'all 1s ease-out';
    document.body.style.background = '#1a1a1a';
    document.body.style.backgroundImage = "url('./assets/bw-code-wp.png')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = "cover";
}

/* PORTFOLIO */
export const portfolioPageContent = () => {
    sections[0].style.display = 'none';
    sections[1].style.display = 'none';
    sections[3].style.display = 'none';

    sections[2].style.display = 'block';

    document.body.style.transition = 'all 1s ease-out';
    document.body.style.background = '#0f766e';
}

/* CONTACT */
export const contactPageContent = () => {
    sections[0].style.display = 'none';
    sections[1].style.display = 'none';
    sections[2].style.display = 'none';

    sections[3].style.display = 'block';

    document.body.style.transition = 'all 1s ease-out';
    document.body.style.background = '#115e59';
    document.body.style.backgroundImage = "url('./assets/matrix-wp_1280.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = "cover";
}

/*
const menuButtons = document.querySelectorAll('button[type=button]');
menuButtons.style.background = '#134e4a';
menuButtons.style.border = 'none';
 */