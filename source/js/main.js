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
  const lessonCounts = [12, 72, 144]; // Количество занятий для каждого срока

  optionItems.forEach((option, index) => {
    option.addEventListener('click', function() {
      // Удаляем класс --active у всех элементов списка
      optionItems.forEach(item => {
        item.classList.remove('price__option-item--active');
      });

      // Добавляем класс --active только к выбранному элементу
      option.classList.add('price__option-item--active');

      const priceElements = document.querySelectorAll('.price__card-price');
      const durationIndex = index; // Индекс выбранного срока абонемента
      priceElements.forEach((priceElement, cardIndex) => {
        const price = cardPrices[durationIndex][cardIndex];
        const currencySymbol = '₽';
        // Заменяем содержимое элемента на новую цену и добавляем символ валюты
        priceElement.textContent = price + currencySymbol;
        // Добавляем новое значение data-price для последующего использования
        priceElement.dataset.price = price;
      });

      // Изменяем количество занятий только у элемента с классом 'price__card-subtitle--offers'
      const subtitleOffers = document.querySelector('.price__card-subtitle--offers');
      const lessonCount = lessonCounts[durationIndex];
      subtitleOffers.textContent = lessonCount + ' занятий';
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

// Video
document.addEventListener('DOMContentLoaded', function() {
  const playButton = document.querySelector('.about__play-button');

  playButton.addEventListener('click', function() {
    const videoContainer = document.querySelector('.about__video-container');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&mute=1';
    iframe.width = 320;
    iframe.height = 170;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.style.position = 'absolute'; // Устанавливаем позиционирование
    iframe.style.top = '0'; // Устанавливаем позицию относительно верхнего края
    iframe.style.left = '0'; // Устанавливаем позицию относительно левого края

    const screenWidth = window.innerWidth;

    if (screenWidth >= 1366) {
      iframe.width = '360';
      iframe.height = '230';
    } else if (screenWidth >= 768) {
      iframe.width = '100%';
      iframe.height = '170';
    } else {
      iframe.width = '100%';
      iframe.height = '170';
    }

    // Добавляем iframe поверх изображения
    videoContainer.appendChild(iframe);
    playButton.style.display = 'none';
  });
});
