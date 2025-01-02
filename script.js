const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const container = document.querySelector('.container');

// Toggle the navigation menu
hamburgerMenu.addEventListener('click', () => {
    const isExpanded = hamburgerMenu.getAttribute('aria-expanded') === 'true';
    hamburgerMenu.setAttribute('aria-expanded', !isExpanded);
    hamburgerMenu.classList.toggle('menu-open');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    
    // Adjust container margin for mobile view
    if (window.innerWidth <= 768) {
        container.style.marginTop = navLinks.classList.contains('active') ? '300px' : '0';
    }
});

// Close the menu when clicking on a link
navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navLinks.classList.remove('active');
        hamburgerMenu.setAttribute('aria-expanded', 'false');
        hamburgerMenu.classList.remove('menu-open');
        document.body.classList.remove('menu-open');

        // Reset container margin for mobile view
        if (window.innerWidth <= 768) {
            container.style.marginTop = '0';
        }
    }
});

// Ensure menu closes on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        hamburgerMenu.setAttribute('aria-expanded', 'false');
        hamburgerMenu.classList.remove('menu-open');
        document.body.classList.remove('menu-open');
        container.style.marginTop = '0';
    }
});
