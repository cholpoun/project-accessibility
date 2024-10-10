const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const expanded = hamburgerMenu.getAttribute('aria-expanded') === 'true';
    hamburgerMenu.setAttribute('aria-expanded', !expanded);
});

navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navLinks.classList.remove('active');
        hamburgerMenu.setAttribute('aria-expanded', 'false');
    }
});
