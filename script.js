document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        successMessage.classList.remove('show');

        let isValid = true;

        const nameValue = nameInput.value.trim();
        if (nameValue === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        }

        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            emailError.textContent = 'Email is required.';
            isValid = false;
        } else if (!emailRegex.test(emailValue)) {
            emailError.textContent = 'Please enter a valid email format (e.g., user@example.com).';
            isValid = false;
        }

        const messageValue = messageInput.value.trim();
        if (messageValue === '') {
            messageError.textContent = 'Message is required.';
            isValid = false;
        }

        if (isValid) {
            successMessage.classList.add('show');
            contactForm.reset();
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
        }
    });
});
