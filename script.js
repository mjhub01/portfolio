// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Make above-the-fold content visible immediately
document.querySelectorAll('[data-aos]').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        el.classList.add('aos-animate');
    }
});

// Set skill bar widths for visible elements
document.querySelectorAll('.skill-bar').forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        const width = bar.getAttribute('data-width');
        if (width) bar.style.width = width;
    }
});

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', { passive: true }, () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-bar');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        }
    });
};

// AOS-like scroll animations - trigger when element enters viewport from bottom
const animateOnScroll = () => {
    document.querySelectorAll('[data-aos]:not(.aos-animate)').forEach(el => {
        const rect = el.getBoundingClientRect();
        // Trigger when element top is 150px above viewport bottom
        const triggerPoint = window.innerHeight - 150;
        
        if (rect.top < triggerPoint && rect.bottom > 0) {
            el.classList.add('aos-animate');
        }
    });
    
    animateSkillBars();
};

// Run on load for elements already in view
animateOnScroll();

// Scroll event listener
window.addEventListener('scroll', { passive: true }, animateOnScroll);

// Also check on resize
window.addEventListener('resize', { passive: true }, animateOnScroll);

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const subject = `Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    window.location.href = `mailto:marjune.gabon07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Reset form
    e.target.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Add hover effects to project cards
document.querySelectorAll('#projects .glass').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});
