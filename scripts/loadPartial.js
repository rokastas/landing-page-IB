import { initializeSwiper } from './swiperInit.js';
import { initializeFaq } from './faqInit.js';

export const loadPartial = async (id, path) => {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Failed to fetch ${path}`);
    const content = await response.text();
    document.getElementById(id).innerHTML = content;
  } catch (error) {
    console.error(`Error loading partial: ${error}`);
  }

  if (id === 'blend-slider') initializeSwiper();
  if (id === 'faq') initializeFaq();
};
