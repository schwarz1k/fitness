document.addEventListener('DOMContentLoaded', () => {
  const optionItems = document.querySelectorAll('.price__option-item');
  const cardPrices = [
    [5000, 1700, 2700], // 1 месяц
    [30000, 10200, 16200], // 6 месяцев
    [60000, 20400, 32400] // 12 месяцев
  ];
  const lessonCounts = [12, 72, 144]; // Количество занятий для каждого срока

  optionItems.forEach((option, index) => {
    const handleClick = () => {
      optionItems.forEach((item) => {
        item.classList.remove('price__option-item--active');
      });
      option.classList.add('price__option-item--active');

      const priceElements = document.querySelectorAll('.price__card-price');
      const durationIndex = index;
      priceElements.forEach((priceElement, cardIndex) => {
        const price = cardPrices[durationIndex][cardIndex];
        const currencySymbol = '₽';
        priceElement.textContent = price + currencySymbol;
        priceElement.dataset.price = price;
      });

      // Изменяем количество занятий только у элемента с классом 'price__card-subtitle--offers'
      const subtitleOffers = document.querySelector('.price__card-subtitle--offers');
      const lessonCount = lessonCounts[durationIndex];
      subtitleOffers.textContent = `${lessonCount} занятий`;
    };

    option.addEventListener('click', handleClick);
    option.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        handleClick();
      }
    });
    option.addEventListener('focus', handleClick);
  });
});
