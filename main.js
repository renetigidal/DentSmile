// Contact form handler
function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('notes');

    // Create mailto link with form data
    const emailBody = `Nombre: ${name}
Email: ${email}
Telefono: ${phone}

Mensaje:
${message}

---
Enviado desde la tu pagina web`;

    const mailtoLink = `mailto:contacto@dentsmilesv.com?subject=${encodeURIComponent(service)}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.display = 'block';
    successDiv.innerHTML = 'Gracias por contactarnos!Si tienes algun problema con el formulario puedes tambien contactarnos en contacto@dentsmilesv.com';

    form.appendChild(successDiv);

    // Reset form after a delay
    setTimeout(() => {
        form.reset();
        successDiv.remove();
    }, 5000);
}


// Smooth scrolling for navigation links
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

// Add scroll effect to header
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = 'black';
    }
});
