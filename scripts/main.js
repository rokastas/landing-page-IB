import { loadPartial } from './loadPartial.js';

document.addEventListener('DOMContentLoaded', () => {
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
