'use strict';

const linksHead = document.querySelectorAll('.menu-list__item');




linksHead.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    const ID = event.target.getAttribute('href').slice(1);

    const elems = document.querySelector(`#${ID}`);

    seamless.scrollIntoView(elems, {
      behavior: "smooth",
      block: "start",
      inline: "center",
    });

  })
})