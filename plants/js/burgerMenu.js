'use strict'

const burgerWrapper = document.querySelector('.burger-wrapper');
const menu = document.querySelector('.menu');


document.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu-item')) {

  } else if (menu.classList.contains('menu_active')) {
    menu.classList.add('menu-transition');
    burgerWrapper.classList.remove('burger-wrapper_active');
    menu.classList.remove('menu_active');

  }else {
    menu.classList.remove('menu-transition');
    burgerWrapper.classList.add('burger-wrapper_active');
    menu.classList.add('menu_active');

  }
})