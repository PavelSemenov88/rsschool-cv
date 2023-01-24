'use strict';

const serviceButtons = document.querySelectorAll('.service-button');
const serviceCards = document.querySelectorAll('.card');


// Выбор только двух услуг.
let arrayButtonIndex = [];
let arrayButtonText = [];

serviceButtons.forEach((button, indexButton) => {

  button.addEventListener('click', (e) => {
    const buttonText = button.textContent;

    if ((arrayButtonText.length < 2) && (arrayButtonText.indexOf(buttonText) == -1)) {
      arrayButtonText.push(buttonText)

    } else if (arrayButtonText.indexOf(buttonText) > -1) {
      const indexDel = arrayButtonText.indexOf(buttonText)
      arrayButtonText.splice(indexDel, 1);
    }

    if ((arrayButtonIndex.length < 2) && (arrayButtonIndex.indexOf(indexButton) == -1)) {

      arrayButtonIndex.push(indexButton);
      button.classList.add('button-hover');

    } else if (arrayButtonIndex.indexOf(indexButton) > -1) {

      const indexDel = arrayButtonIndex.indexOf(indexButton)
      arrayButtonIndex.splice(indexDel, 1);

      button.classList.remove('button-hover');

    }

    serviceCards.forEach(card => {
      const cardTitle = card.querySelector('.card-content__title').textContent.split(' ');

      if (!(arrayButtonText.includes(cardTitle[0]))) {
        card.classList.add('blur');
        
      } else {
        card.classList.remove('blur');
      }

      if (arrayButtonText.length === 0) {
        card.classList.remove('blur');
      }

    })
  })

})




// Выбор только одной услуги.
// serviceButtons.forEach(button => {
//   button.addEventListener('click', () => {

//     if (button.classList.contains('button-hover')) {
//       button.classList.remove('button-hover');

//       serviceCards.forEach(card => card.classList.remove('blur'));

//     } else {
//       serviceButtons.forEach(button => {
//         button.classList.remove('button-hover');
//       });

//       button.classList.add('button-hover');

//       serviceCards.forEach(card => {
//         card.classList.remove('blur');

//         const buttonText = button.textContent.slice(0, -1);
//         const cardText = card.innerText;

//         if (cardText.includes(buttonText)) {
//           card.classList.remove('blur');
//         } else {
//           card.classList.add('blur');
//         }
//       })
//     }
//   })
// })