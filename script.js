// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

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

// AOS-like scroll animations
const aosElements = document.querySelectorAll('[data-aos]');

const animateOnScroll = () => {
    aosElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
            el.classList.add('aos-animate');
        }
    });
    
    animateSkillBars();
};

// Initial animation check
animateOnScroll();

// Scroll event listener
window.addEventListener('scroll', { passive: true }, animateOnScroll);

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
