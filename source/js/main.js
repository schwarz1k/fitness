import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

// Change Price
document.addEventListener('DOMContentLoaded', function() {
  const optionItems = document.querySelectorAll('.price__option-item');
  const cardPrices = [
    [5000, 1700, 2700], // 1 месяц
    [30000, 10200, 16200], // 6 месяцев
    [60000, 20400, 32400] // 12 месяцев
  ];

  optionItems.forEach((option, index) => {
    option.addEventListener('click', function() {
      const priceElements = document.querySelectorAll('.price__card-price');
      const durationIndex = index; // Индекс выбранного срока абонемента
      priceElements.forEach((priceElement, cardIndex) => {
        priceElement.textContent = cardPrices[durationIndex][cardIndex] + 'р';
      });
    });
  });
});

// Swiper Jury
Swiper.use([Navigation, Pagination]);

const jurySwiper = new Swiper('.swiper-container.jury-swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.jury-swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.jury-swiper-button-next',
    prevEl: '.jury-swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1366: {
      slidesPerView: 4
    }
  }
});

// Swiper Reviews
const reviewsSwiper = new Swiper('.swiper-container.reviews-swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  navigation: {
    nextEl: '.reviews-swiper-button-next',
    prevEl: '.reviews-swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 10,
    }
  }
});


document.querySelectorAll('.swiper-slide').forEach(function(slide) {
  slide.addEventListener('click', function() {
    this.classList.toggle('expanded');
  });
});


// Accordion
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.faq__tab');
  const accordions = document.querySelectorAll('.faq__accordion');

  accordions.forEach((accordion, index) => {
    if (index === 0) {
      accordion.style.display = 'block';
      accordion.classList.add('faq__accordion--active');
      const firstQuestion = accordion.querySelector('details');
      if (firstQuestion) {
        firstQuestion.setAttribute('open', 'true');
      }
    } else {
      accordion.style.display = 'none';
    }
  });

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      const targetAccordion = document.getElementById(target);

      tabs.forEach(tab => tab.classList.remove('faq__tab--active'));
      accordions.forEach(accordion => {
        accordion.style.display = 'none';
        accordion.classList.remove('faq__accordion--active');
      });

      this.classList.add('faq__tab--active');
      targetAccordion.style.display = 'block';
      targetAccordion.classList.add('faq__accordion--active');
    });
  });

  const detailsElements = document.querySelectorAll('details');

  detailsElements.forEach(details => {
    details.addEventListener('toggle', function() {
      if (this.open) {
        this.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// Form
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');

  form.addEventListener('submit', function(event) {
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
  }

  function hideError(input) {
    const errorDiv = input.parentElement.querySelector('.input-control__error');
    errorDiv.textContent = '';
    errorDiv.style.display = 'none';
  }
});
