'use strict';

const menu = document.querySelector('.menu');
const burgerMenu = document.querySelector('.burger-menu');

document.addEventListener('click', (e) => {
  if (e.target === burgerMenu) {
    e.preventDefault();
    burgerMenu.classList.toggle('burger-menu-active');
    menu.classList.toggle('menu-active')
  } else {
    burgerMenu.classList.remove('burger-menu-active');
    menu.classList.remove('menu-active')
  }
})
