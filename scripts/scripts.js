document.addEventListener('DOMContentLoaded', () => {
  const loadPartial = async (id, path) => {
    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error(`Failed to fetch ${path}`);
      const content = await response.text();
      document.getElementById(id).innerHTML = content;
    } catch (error) {
      console.error(`Error loading partial: ${error}`);
    };

    if (id === 'blend-slider') initializeSwiper();
    if (id === 'faq') initializeFaq();
  };

  loadPartial('navbar', 'partials/navbar.html');
  loadPartial('hero', 'partials/hero.html');
  loadPartial('four-cards', 'partials/four-cards.html');
  loadPartial('subscribe-save', 'partials/subscribe-save.html');
  loadPartial('performance-nutrition', 'partials/performance-nutrition.html');
  loadPartial('usda-certification', 'partials/usda-certification.html');
  loadPartial('blend-slider', 'partials/blend-slider.html');
  loadPartial('process', 'partials/process.html');
  loadPartial('faq', 'partials/faq.html');
});

function initializeSwiper() {
  new Swiper('.swiper-container', {
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
};

function initializeFaq () {
  const faqItems = document.querySelectorAll('.faq-section__item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-section__item__question');

    question.addEventListener('click', () => {
      const answer = item.querySelector('.faq-section__item__answer');

      item.classList.toggle('faq-section__item--active');
    });
  });
};

function tryProductAlert() {
  alert("Mmm.. Delicious!");
}

function addToCartAlert() {
  alert("Added to cart!");
}
