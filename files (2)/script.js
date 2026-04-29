// ==========================================
// MOBILE MENU TOGGLE
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
});

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

let lastScroll = 0;
const nav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    } else {
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements that should animate on scroll
document.querySelectorAll('.work-card, .case-section, .timeline-item, .challenge-card, .result-card, .feature').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add animation class styles
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ==========================================
// PAGE TRANSITION EFFECT
// ==========================================

// Add fade-in effect on page load
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.4s ease';

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ==========================================
// WORK CARD HOVER EFFECTS
// ==========================================

document.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.card-number').style.transform = 'translateY(-10px)';
        this.querySelector('.card-number').style.transition = 'transform 0.4s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.card-number').style.transform = 'translateY(0)';
    });
});

// ==========================================
// DROPDOWN ACCESSIBILITY
// ==========================================

document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
    const trigger = dropdown.querySelector('.dropdown-trigger');
    
    // Keyboard accessibility
    trigger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const menu = dropdown.querySelector('.dropdown-menu');
            const isVisible = menu.style.opacity === '1';
            
            if (isVisible) {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
            } else {
                menu.style.opacity = '1';
                menu.style.visibility = 'visible';
            }
        }
    });
});

// ==========================================
// CURRENT YEAR IN FOOTER
// ==========================================

document.querySelectorAll('.main-footer p').forEach(p => {
    if (p.textContent.includes('2024')) {
        p.textContent = p.textContent.replace('2024', new Date().getFullYear());
    }
});

console.log('Portfolio site initialized');
