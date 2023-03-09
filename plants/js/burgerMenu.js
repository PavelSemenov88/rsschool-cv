'use strict'

const burgerWrapper = document.querySelector('.burger-wrapper');
const menu = document.querySelector('.menu');


document.addEventListener('click', (e) => {
  if (document.documentElement.clientWidth <= 500) {

    if (e.target === burgerWrapper || e.target.classList.contains('burger__line')) {

      burgerWrapper.classList.toggle('burger-wrapper_active');
      menu.classList.toggle('menu_active');
    } else {
      burgerWrapper.classList.remove('burger-wrapper_active');
      menu.classList.remove('menu_active')
    }
  }

})