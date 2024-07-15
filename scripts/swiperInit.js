export const initializeSwiper = () => {
  new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) =>
        `<span class="${className}"></span>`,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
};
