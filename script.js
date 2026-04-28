// Initialize AOS Animation
AOS.init({
    once: true,
    offset: 50,
});

// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle icon between bars and times
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Change navbar background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.05)';
    }
});

// Form Submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // WhatsApp API Integration
    const phoneNumber = "966556842482";
    
    let text = `مرحباً، أود الاستفسار عن خدماتكم:%0A`;
    text += `الاسم: ${name}%0A`;
    text += `رقم الجوال: ${phone}%0A`;
    text += `الخدمة المطلوبة: ${service}%0A`;
    text += `الرسالة: ${message}`;
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
});
