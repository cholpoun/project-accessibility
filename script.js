const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const expanded = hamburgerMenu.getAttribute('aria-expanded') === 'true';
    hamburgerMenu.setAttribute('aria-expanded', !expanded);
    document.body.classList.toggle('menu-open');
    hamburgerMenu.classList.toggle('menu-open');
    const container = document.querySelector('.container');
    if (window.innerWidth <= 768) {
        container.style.marginTop = navLinks.classList.contains('active') ? '300px' : '0';
    }
});

navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navLinks.classList.remove('active');
        hamburgerMenu.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
        hamburgerMenu.classList.remove('menu-open');
        const container = document.querySelector('.container');
        if (window.innerWidth <= 768) {
            container.style.marginTop = '0';
        }
    }
});
