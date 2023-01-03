'use strict';

const menuItemLink = document.querySelectorAll('.menu-item__link');


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