document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    const nameError = nameInput.nextElementSibling;
    const emailError = emailInput.nextElementSibling;
    const phoneError = phoneInput.nextElementSibling;
    const messageError = messageInput.nextElementSibling;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;

        // Reset errors
        nameError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';
        messageError.textContent = '';
        nameInput.classList.remove('invalid');
        emailInput.classList.remove('invalid');
        phoneInput.classList.remove('invalid');
        messageInput.classList.remove('invalid');

        // Validate Name
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            nameInput.classList.add('invalid');
            isValid = false;
        }

        // Validate Email
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            emailInput.classList.add('invalid');
            isValid = false;
        }

        // Validate Phone Number
        if (!phoneRegex.test(phoneInput.value.trim())) {
            phoneError.textContent = 'Please enter a valid 10-digit phone number.';
            phoneInput.classList.add('invalid');
            isValid = false;
        }

        // Validate Message
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required.';
            messageInput.classList.add('invalid');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
            contactForm.reset();
        }
    });
});
