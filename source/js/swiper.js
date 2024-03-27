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
      },
    },
  });
}

export function initializeReviewsSwiper() {
  return new Swiper('.swiper-container.reviews-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
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
}
