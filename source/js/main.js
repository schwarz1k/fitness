import './change-price';
import { initializeJurySwiper, initializeReviewsSwiper } from './swiper';
import './accordion';
import './form';
import './video';
import './disabled';

initializeJurySwiper();
initializeReviewsSwiper();

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

