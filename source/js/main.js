import './change-price.js';
import { initializeJurySwiper, initializeReviewsSwiper } from './swiper';
import './accordion';
import './form';
import './video';

initializeJurySwiper();
initializeReviewsSwiper();

document.querySelectorAll('.swiper-slide').forEach((slide) => {
  slide.addEventListener('click', function (event) {
    const parentSlider = event.currentTarget.closest('.reviews-slider');
    if (!parentSlider) {
      this.classList.toggle('expanded');
    }
  });
});
