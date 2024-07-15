export const initializeFaq = () => {
  const faqItems = document.querySelectorAll('.faq-section__item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-section__item__question');

    question.addEventListener('click', () => {
      const answer = item.querySelector('.faq-section__item__answer');

      item.classList.toggle('faq-section__item--active');
    });
  });
};
