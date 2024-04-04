document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');

  form.addEventListener('submit', (event) => {
    let valid = true;

    // Проверка заполненности полей
    if (nameInput.value.trim() === '') {
      showError(nameInput, 'Поле "Имя" обязательно для заполнения');
      valid = false;
    } else if (!/^[a-zA-Zа-яА-Я\s]+$/.test(nameInput.value.trim())) {
      showError(nameInput, 'Поле "Имя" должно содержать только буквы и пробелы');
      valid = false;
    } else {
      hideError(nameInput);
    }

    if (phoneInput.value.trim() === '') {
      showError(phoneInput, 'Поле "Телефон" обязательно для заполнения');
      valid = false;
    } else if (!/^\d+$/.test(phoneInput.value.trim())) {
      showError(phoneInput, 'Поле "Телефон" должно содержать только цифры');
      valid = false;
    } else {
      hideError(phoneInput);
    }

    if (!valid) {
      event.preventDefault();
    }
  });

  function showError(input, message) {
    const errorDiv = input.parentElement.querySelector('.input-control__error');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';

    input.classList.add('error');
  }

  function hideError(input) {
    const errorDiv = input.parentElement.querySelector('.input-control__error');
    errorDiv.textContent = '';
    errorDiv.style.display = 'none';

    input.classList.remove('error');
  }
});
