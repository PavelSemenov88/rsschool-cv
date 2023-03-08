'use strict';

const linksHead = document.querySelectorAll('.menu-list__item');
const goTop = document.querySelector('.go-top');

const links = [goTop, ...linksHead]


links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    const ID = event.target.getAttribute('href');
    const elems = document.querySelector(`${ID}`);

    seamless.scrollIntoView(elems, {
      behavior: "smooth",
      block: "center",
      inline: "center",
    });

  })
})

window.addEventListener('scroll', () => {
  const scrolledY = window.scrollY;
  // положение от вверха

  const innerWidth = window.innerWidth;
  //ширина окна

  const coords = document.documentElement.clientHeight;
  // высота окна

  if (scrolledY > coords && innerWidth <= 900) {
    goTop.classList.add('go-top_show')
  } else {
    goTop.classList.remove('go-top_show')
  }

})
