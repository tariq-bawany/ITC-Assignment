
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

function validateName(name) {
  const nameRegex = /^[A-Za-z\s]+$/;
  if (name.trim() === '') {
    return 'Name is required';
  }
  if (!nameRegex.test(name)) {
    return 'Name must contain only letters';
  }
  return '';
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.trim() === '') {
    return 'Email is required';
  }
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address';
  }
  return '';
}

function validatePhone(phone) {
  const phoneRegex = /^[0-9]+$/;
  if (phone.trim() === '') {
    return 'Phone number is required';
  }
  if (!phoneRegex.test(phone)) {
    return 'Phone number must contain only numbers';
  }
  if (phone.length < 10) {
    return 'Phone number must be at least 10 digits';
  }
  return '';
}

function validateMessage(message) {
  if (message.trim() === '') {
    return 'Message is required';
  }
  if (message.trim().length < 10) {
    return 'Message must be at least 10 characters long';
  }
  return '';
}

function showError(errorElement, message) {
  errorElement.textContent = message;
}

function clearError(errorElement) {
  errorElement.textContent = '';
}

nameInput.addEventListener('input', () => {
  clearError(nameError);
});

emailInput.addEventListener('input', () => {
  clearError(emailError);
});

phoneInput.addEventListener('input', () => {
  clearError(phoneError);
});

messageInput.addEventListener('input', () => {
  clearError(messageError);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const phoneValue = phoneInput.value;
  const messageValue = messageInput.value;

  const nameErrorMsg = validateName(nameValue);
  const emailErrorMsg = validateEmail(emailValue);
  const phoneErrorMsg = validatePhone(phoneValue);
  const messageErrorMsg = validateMessage(messageValue);

  showError(nameError, nameErrorMsg);
  showError(emailError, emailErrorMsg);
  showError(phoneError, phoneErrorMsg);
  showError(messageError, messageErrorMsg);

  if (!nameErrorMsg && !emailErrorMsg && !phoneErrorMsg && !messageErrorMsg) {
    successMessage.classList.add('show');

    alert(`Form Submitted Successfully!\n\nName: ${nameValue}\nEmail: ${emailValue}\nPhone: ${phoneValue}\nMessage: ${messageValue}`);

    form.reset();

    setTimeout(() => {
      successMessage.classList.remove('show');
    }, 5000);
  }
});
