const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const expanded = hamburgerMenu.getAttribute('aria-expanded') === 'true';
    hamburgerMenu.setAttribute('aria-expanded', !expanded);
    document.body.classList.toggle('menu-open');
});

navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navLinks.classList.remove('active');
        hamburgerMenu.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
    }
});
