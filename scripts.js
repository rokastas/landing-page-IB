function tryProductAlert() {
  alert("Mmm.. Delicious!");
}

function addToCartAlert() {
  alert("Added to cart!");
}

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');

      question.addEventListener('click', () => {
          const answer = item.querySelector('.faq-answer');

          item.classList.toggle('active');
      });
  });
});
