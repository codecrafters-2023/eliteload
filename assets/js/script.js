// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const mobileButtons = document.querySelector('.mobile-buttons');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Add active class to clicked nav item
const navItems = document.querySelectorAll('.nav-links li');

navItems.forEach(item => {
    item.addEventListener('click', function () {
        navItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// Button hover effect enhancement
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px)';
    });

    button.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});


// hero section
// Add interactive animations
document.addEventListener('DOMContentLoaded', function () {
    // Animate stats
    const statItems = document.querySelectorAll('.stat-item');

    setTimeout(() => {
        statItems.forEach(item => {
            const number = item.querySelector('.stat-number');
            if (number.textContent.includes('%')) {
                animateValue(number, 0, parseFloat(number.textContent), 2000);
            } else if (number.textContent.includes('K')) {
                animateValue(number, 0, 15, 2000, 'K');
            } else {
                number.style.opacity = 1;
            }
        });
    }, 1000);

    // Function to animate values
    function animateValue(element, start, end, duration, suffix = '') {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = suffix ? `${value}${suffix}` : value.toFixed(1) + '%';
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
});

// features section

// Adding subtle animation to cards when they come into view
document.addEventListener('DOMContentLoaded', function () {
    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach((card, index) => {
        // Add delay based on index for staggered animation
        card.style.transitionDelay = `${index * 0.1}s`;
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 500 + (index * 100));
    });
});

// About section
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.about-text, .about-features, .cta-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
});

// service section
document.addEventListener('DOMContentLoaded', function () {
    const serviceCards = document.querySelectorAll('.service-card');

    // Add scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    serviceCards.forEach(card => {
        observer.observe(card);
    });
});

// home page contact section

document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.parentElement.classList.remove('focused');
        }
    });
});

// Add animation to contact section when it comes into view
const contactSection = document.querySelector('.contact-container');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            contactSection.style.animation = 'fadeIn 1s ease-out forwards';
            observer.unobserve(contactSection);
        }
    });
}, { threshold: 0.1 });

observer.observe(contactSection);



// Service Page
        document.addEventListener('DOMContentLoaded', function () {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            // Observe all service cards
            document.querySelectorAll('.truck-service-card').forEach(card => {
                observer.observe(card);
            });

            // Observe all stat items
            document.querySelectorAll('.truck-stat-item').forEach(stat => {
                observer.observe(stat);
            });

            // Observe all testimonial cards
            document.querySelectorAll('.truck-testimonial-card').forEach(testimonial => {
                observer.observe(testimonial);
            });
        });


// Contact Page
        document.addEventListener('DOMContentLoaded', function() {
            const contactItems = document.querySelectorAll('.primehaul-contact-item');
            const contactForm = document.querySelector('.primehaul-contact-form');
            
            // Add delay for each contact item animation
            contactItems.forEach((item, index) => {
                item.style.animation = `fadeInUp 0.6s ease ${index * 0.1 + 0.2}s both`;
            });
            
            // Animation for the form
            contactForm.style.animation = "fadeInUp 0.8s ease 0.4s both";
            
            // Form submission handler
            const form = document.querySelector('form');
            if(form) {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Thank you for your message! Our team will contact you shortly.');
                    form.reset();
                });
            }
        });