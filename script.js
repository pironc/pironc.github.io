// Initialize i18n when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure translations.js is fully loaded
    setTimeout(function() {
        initI18n();
    }, 100);
});

// Language switcher functionality
document.addEventListener('click', function(e) {
    const languageDropdown = document.querySelector('.language-dropdown');

    // Toggle dropdown when clicking selector
    if (e.target.closest('.lang-selector')) {
        languageDropdown.classList.toggle('open');
        e.stopPropagation();
        return;
    }

    // Close dropdown when clicking outside
    if (!e.target.closest('.language-dropdown')) {
        languageDropdown.classList.remove('open');
    }
});

// Add click handlers to language options
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            window.i18n.setLanguage(lang);
            document.querySelector('.language-dropdown').classList.remove('open');
        });
    });
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80; // Account for fixed navbar height
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px 100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in effect
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Portfolio item click handler (for future modal/lightbox)
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
        // You can add a modal or lightbox here later
        console.log('Portfolio item clicked');
    });
});

// Videos are set to autoplay, muted, and loop continuously
// No additional JavaScript controls needed for the clean video experience

// Contact form validation (basic)
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Since we're using mailto, we'll let the browser handle it
        // But we can add some basic validation
        const name = contactForm.querySelector('[name="name"]').value;
        const email = contactForm.querySelector('[name="email"]').value;
        const subject = contactForm.querySelector('[name="subject"]').value;
        const message = contactForm.querySelector('[name="message"]').value;

        if (!name || !email || !subject || !message) {
            e.preventDefault();
            alert('Please fill in all fields');
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            alert('Please enter a valid email address');
            return;
        }

        // The form will now submit via mailto
        // Note: This opens the user's email client
    });
}
