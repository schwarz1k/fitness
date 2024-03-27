document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.faq__tabs-item');
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

  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      const target = this.getAttribute('data-target');
      const targetAccordion = document.getElementById(target);

      tabs.forEach((tabItem) => tabItem.classList.remove('faq__tabs-item--active'));
      accordions.forEach((accordion) => {
        accordion.style.display = 'none';
        accordion.classList.remove('faq__accordion--active');
      });

      this.classList.add('faq__tabs-item--active');
      targetAccordion.style.display = 'block';
      targetAccordion.classList.add('faq__accordion--active');
    });
  });

  const detailsElements = document.querySelectorAll('details');

});
