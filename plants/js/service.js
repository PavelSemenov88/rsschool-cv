'use strict';

const serviceButtons = document.querySelectorAll('.service-button');
const serviceCards = document.querySelectorAll('.card');

serviceButtons.forEach(button => {
  button.addEventListener('click', () => {

    if (button.classList.contains('button-hover')) {
      button.classList.remove('button-hover');

      serviceCards.forEach(card => card.classList.remove('blur'));

    } else {
      serviceButtons.forEach(button => {
        button.classList.remove('button-hover');
      });

      button.classList.add('button-hover');

      serviceCards.forEach(card => {
        card.classList.remove('blur');

        const buttonText = button.textContent.slice(0, -1);
        const cardText = card.innerText;

        if (cardText.includes(buttonText)) {
          card.classList.remove('blur');
        } else {
          card.classList.add('blur');
        }
      })
    }

    

  })
  
})