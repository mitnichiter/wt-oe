document.addEventListener('DOMContentLoaded', () => {
    const admissionForm = document.getElementById('admission-form');
    if (!admissionForm) {
        return;
    }

    const inputs = admissionForm.querySelectorAll('input[required], select[required], textarea[required]');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const gpaRegex = /^(100(\.0{1,2})?|[1-9]?\d(\.\d{1,2})?)$/;

    admissionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;

        inputs.forEach(input => {
            const errorSpan = input.nextElementSibling;
            if (errorSpan && errorSpan.classList.contains('error-message')) {
                errorSpan.textContent = '';
            }
            input.classList.remove('invalid');

            let hasError = false;
            if (input.type === 'text' || input.tagName.toLowerCase() === 'textarea') {
                if (input.value.trim() === '') {
                    hasError = true;
                }
            } else if (input.type === 'date') {
                if (input.value === '') {
                    hasError = true;
                } else {
                    const selectedDate = new Date(input.value);
                    const today = new Date();
                    if (selectedDate > today) {
                        errorSpan.textContent = 'Date of birth cannot be in the future.';
                        hasError = true;
                    }
                }
            } else if (input.tagName.toLowerCase() === 'select') {
                if (input.value === '') {
                    hasError = true;
                }
            } else if (input.type === 'email') {
                if (!emailRegex.test(input.value.trim())) {
                    errorSpan.textContent = 'Please enter a valid email address.';
                    hasError = true;
                }
            } else if (input.type === 'tel') {
                if (!phoneRegex.test(phoneInput.value.trim())) {
                    errorSpan.textContent = 'Please enter a valid 10-digit phone number.';
                    hasError = true;
                }
            } else if (input.type === 'number') {
                if (input.value.trim() === '' || parseInt(input.value) > new Date().getFullYear()) {
                    errorSpan.textContent = 'Please enter a valid year.';
                    hasError = true;
                }
            } else if (input.id.startsWith('gpa')) {
                if (!gpaRegex.test(input.value.trim())) {
                    errorSpan.textContent = 'Please enter a valid Percentage or GPA.';
                    hasError = true;
                }
            }

            if (hasError && errorSpan && errorSpan.textContent === '') {
                errorSpan.textContent = `${input.previousElementSibling.textContent.replace('>', '').trim()} is required.`;
            }

            if (hasError) {
                input.classList.add('invalid');
                isValid = false;
            }
        });

        if (isValid) {
            alert('Application submitted successfully!');
            admissionForm.reset();
        }
    });
});
