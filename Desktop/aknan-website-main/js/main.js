// ============================================
// Aknan Document Processing Company - Main JS
// ============================================

// Language Management
const translations = {
    ar: {
        // Navigation
        navHome: 'الرئيسية',
        navAbout: 'من نحن',
        navServices: 'خدماتنا',
        navTeam: 'فريق العمل',
        navContact: 'اتصل بنا',
        
        // Hero
        heroTitle: 'شركة أكنان لتعقيب المعاملات',
        heroSlogan: 'نعالج مستنداتك بسرعة وكفاءة',
        btnServices: 'خدماتنا',
        btnContact: 'اتصل بنا',
        
        // Sections
        sectionWhyChoose: 'لماذا تختارنا',
        sectionServices: 'خدماتنا الرئيسية',
        sectionClients: 'عملاؤنا',
        
        // About
        aboutTitle: 'من نحن',
        vision: 'رؤيتنا',
        mission: 'رسالتنا',
        values: 'قيمنا',
        integrity: 'النزاهة',
        speed: 'السرعة',
        accuracy: 'الدقة',
        
        // Services
        service1: 'معالجة المستندات الحكومية',
        service2: 'خدمات البلدية',
        service3: 'خدمات الشرطة السلطانية',
        service4: 'خدمات التأشيرات',
        service5: 'تجديد السجل التجاري',
        service6: 'الموافقات والتراخيص',
        service7: 'تقديم النماذج الإلكترونية',
        service8: 'إدارة المستندات',
        btnRequestService: 'طلب الخدمة',
        
        // Team
        teamTitle: 'فريق العمل',
        
        // Contact
        contactTitle: 'اتصل بنا',
        formName: 'الاسم',
        formPhone: 'الهاتف',
        formEmail: 'البريد الإلكتروني',
        formService: 'نوع الخدمة',
        formMessage: 'الرسالة',
        btnSubmit: 'إرسال',
        
        // Footer
        footerAbout: 'من نحن',
        footerServices: 'خدماتنا',
        footerContact: 'اتصل بنا',
        footerRights: 'جميع الحقوق محفوظة © 2025 شركة أكنان'
    },
    en: {
        // Navigation
        navHome: 'Home',
        navAbout: 'About Us',
        navServices: 'Services',
        navTeam: 'Team',
        navContact: 'Contact',
        
        // Hero
        heroTitle: 'Aknan Document Processing Company',
        heroSlogan: 'We process your documents with speed and efficiency',
        btnServices: 'Our Services',
        btnContact: 'Contact Us',
        
        // Sections
        sectionWhyChoose: 'Why Choose Us',
        sectionServices: 'Our Main Services',
        sectionClients: 'Our Clients',
        
        // About
        aboutTitle: 'About Us',
        vision: 'Vision',
        mission: 'Mission',
        values: 'Our Values',
        integrity: 'Integrity',
        speed: 'Speed',
        accuracy: 'Accuracy',
        
        // Services
        service1: 'Government Document Processing',
        service2: 'Municipality Services',
        service3: 'Royal Oman Police Services',
        service4: 'Visa Services',
        service5: 'Commercial Registration Renewal',
        service6: 'Approvals & Permits',
        service7: 'Electronic Form Submission',
        service8: 'Document Management',
        btnRequestService: 'Request Service',
        
        // Team
        teamTitle: 'Our Team',
        
        // Contact
        contactTitle: 'Contact Us',
        formName: 'Name',
        formPhone: 'Phone',
        formEmail: 'Email',
        formService: 'Type of Service',
        formMessage: 'Message',
        btnSubmit: 'Submit',
        
        // Footer
        footerAbout: 'About Us',
        footerServices: 'Services',
        footerContact: 'Contact',
        footerRights: 'All Rights Reserved © 2025 Aknan Company'
    }
};

let currentLang = localStorage.getItem('lang') || 'ar';

// Initialize Language
function initLanguage() {
    const html = document.documentElement;
    if (currentLang === 'en') {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
    } else {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
    }
    translatePage();
}

// Translate Page
function translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
    
    // Update placeholders
    const placeholders = document.querySelectorAll('[data-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });
}

// Toggle Language
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('lang', currentLang);
    initLanguage();
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
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
}

// Header Scroll Effect
function initHeaderScroll() {
    let lastScroll = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
        
        lastScroll = currentScroll;
    });
}

// Contact Form Handler
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert(currentLang === 'ar' 
                ? 'شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.' 
                : 'Thank you! Your message has been sent successfully. We will contact you soon.');
            
            form.reset();
        });
    }
}

// Service Request Handler
function handleServiceRequest(serviceName) {
    // Redirect to contact page with service pre-selected
    const serviceParam = encodeURIComponent(serviceName);
    window.location.href = `contact.html?service=${serviceParam}`;
}

// Initialize WhatsApp Button
function initWhatsAppButton() {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            const phoneNumber = '96812345678'; // Replace with actual WhatsApp number
            const message = currentLang === 'ar' 
                ? 'مرحباً، أريد الاستفسار عن خدماتكم' 
                : 'Hello, I would like to inquire about your services';
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        });
    }
}

// Pre-select service from URL parameter
function initServicePreSelect() {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    if (service) {
        const serviceSelect = document.getElementById('serviceType');
        if (serviceSelect) {
            serviceSelect.value = decodeURIComponent(service);
        }
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initScrollAnimations();
    initSmoothScroll();
    initHeaderScroll();
    initContactForm();
    initWhatsAppButton();
    initServicePreSelect();
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const navLinks = document.querySelector('.nav-links');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (navLinks && navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !menuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
});

// Export functions for use in HTML
window.toggleLanguage = toggleLanguage;
window.toggleMobileMenu = toggleMobileMenu;
window.handleServiceRequest = handleServiceRequest;

