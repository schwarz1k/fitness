import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

Swiper.use([Navigation, Pagination]);

export function initializeJurySwiper() {
  return new Swiper('.swiper-container.jury-swiper-container', {
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
        slidesPerView: 2,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  });
}

export function initializeReviewsSwiper() {
  const reviewsSwiper = new Swiper('.swiper-container.reviews-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    pagination: {
      el: '.reviews-swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.reviews-swiper-button-next',
      prevEl: '.reviews-swiper-button-prev',
    },
    breakpoints: {
      321: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
    },
  });

  document.querySelectorAll('.swiper-slide').forEach((slide) => {
    slide.addEventListener('mouseenter', function () {
      const parentSlider = this.closest('.reviews-slider');
      if (!parentSlider) {
        this.classList.add('expanded');
      }
    });

    slide.addEventListener('mouseleave', function () {
      const parentSlider = this.closest('.reviews-slider');
      if (!parentSlider) {
        this.classList.remove('expanded');
      }
    });

    slide.addEventListener('focusin', function () {
      const parentSlider = this.closest('.reviews-slider');
      if (!parentSlider) {
        this.classList.add('expanded');
      }
    });

    slide.addEventListener('focusout', function () {
      const parentSlider = this.closest('.reviews-slider');
      if (!parentSlider) {
        this.classList.remove('expanded');
      }
    });
  });

  const prevButton = document.querySelector('.reviews-swiper-button-prev');
  const nextButton = document.querySelector('.reviews-swiper-button-next');

  prevButton.addEventListener('click', function() {
    reviewsSwiper.slidePrev();
  });

  nextButton.addEventListener('click', function() {
    reviewsSwiper.slideNext();
  });

  prevButton.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      reviewsSwiper.slidePrev();
    }
  });

  nextButton.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      reviewsSwiper.slideNext();
    }
  });

  return reviewsSwiper;
}
