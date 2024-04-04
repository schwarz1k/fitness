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
        firstQuestion.classList.add('open');
      }
    } else {
      accordion.style.display = 'none';
    }
  });

  tabs.forEach((tab) => {
    const button = tab.querySelector('button');
    button.addEventListener('click', function () {
      const target = this.parentElement.getAttribute('data-target');
      const targetAccordion = document.getElementById(target);

      tabs.forEach((tabItem) => tabItem.querySelector('button').classList.remove('faq__tab--active'));
      accordions.forEach((accordion) => {
        accordion.style.display = 'none';
        accordion.classList.remove('faq__accordion--active');
      });

      this.classList.add('faq__tab--active');
      targetAccordion.style.display = 'block';
      targetAccordion.classList.add('faq__accordion--active');
    });
  });


  const detailsElements = document.querySelectorAll('details');

  detailsElements.forEach((details) => details.addEventListener('toggle', function () {
    if (this.open) {
      this.classList.add('open');
    } else {
      this.classList.remove('open');
    }
  }));
});
