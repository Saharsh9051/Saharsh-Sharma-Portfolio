document.addEventListener('DOMContentLoaded', function() {

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Nav Toggler
    const navToggler = document.querySelector('.nav-toggler');
    const navMenu = document.querySelector('#navbar nav');

    navToggler.addEventListener('click', () => {
        navToggler.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile nav when a link is clicked
    const navLinks = document.querySelectorAll('#navbar nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navToggler.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Smooth scroll for anchor links (if not fully handled by CSS scroll-behavior)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Check if it's a simple hash link for the current page
            if (href.length > 1 && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Portfolio Card Scroll Reveal
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the card is visible

    portfolioCards.forEach(card => {
        revealObserver.observe(card);
    });

    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

});
