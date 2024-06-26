const enabledLinks = document.querySelectorAll('.enabled');

enabledLinks.forEach((link) => {
  link.addEventListener('click', function(event) {
    if (this.classList.contains('enabled')) {
      this.classList.remove('enabled');
      this.classList.add('disabled');
      this.setAttribute('tabindex', '-1');
      this.setAttribute('aria-disabled', 'true');
    } else {
      event.preventDefault();
    }
  });
});

document.querySelector('.swiper-button-prev').addEventListener('click', () => {
  document.querySelector('.test').classList.add('active');
});

document.querySelector('.swiper-button-next').addEventListener('click', () => {
  document.querySelector('.test').classList.add('active');
});
