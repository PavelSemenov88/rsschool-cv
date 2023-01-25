'use strict';

const menuItemLink = document.querySelectorAll('.menu-item__link');

const buttonAccordion = document.querySelectorAll('.content__button');

buttonAccordion.forEach(button => {
  button.addEventListener('click', () => {
    const elems = document.querySelector('#contact');
    seamless.scrollIntoView(elems, {
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  })
})



menuItemLink.forEach(list => {
  
  list.addEventListener('click', (e) => {
    
    e.preventDefault();
    const ID = e.target.getAttribute('href');
    const elems = document.querySelector(`${ID}`);
    seamless.scrollIntoView(elems, {
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  })
})