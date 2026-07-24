// Inicializa las animaciones al hacer scroll (AOS)
document.addEventListener('DOMContentLoaded', function () {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 60
        });
    }
});

// Validación simple del formulario de contacto (solo front-end, sin backend)
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Te responderé pronto.');
        contactForm.reset();
    });
}
