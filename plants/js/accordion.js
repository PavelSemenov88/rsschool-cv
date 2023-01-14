'use strict';

const accordionItems = document.querySelectorAll('.accordion-item');

const accordionTriggers = document.querySelectorAll('.accordion-trigger');
const triggerIcons = document.querySelectorAll('.trigger-icon');
const accordionContents = document.querySelectorAll('.accordion-content');

const pricesRight = document.querySelector('.prices-right');

accordionTriggers.forEach((accordionTrigger, index) => {


  accordionTrigger.addEventListener('click', () => {

    if (accordionTrigger.classList.contains('accordion-trigger_active')) {
      accordionTrigger.classList.remove('accordion-trigger_active');
      accordionItems[index].classList.remove('accordion-item_active');
      triggerIcons[index].classList.remove('trigger-icon_active');
      accordionContents[index].classList.remove('accordion-content_active');

      pricesRight.style.display = 'block';

    } else {
      accordionItems.forEach(accordionItem => {
        accordionItem.classList.remove('accordion-item_active');
      })
      accordionItems[index].classList.add('accordion-item_active');

      accordionTriggers.forEach(accordionTrigger => {
        accordionTrigger.classList.remove('accordion-trigger_active')
      })
      accordionTriggers[index].classList.add('accordion-trigger_active');

      triggerIcons.forEach(triggerIcon => {
        triggerIcon.classList.remove('trigger-icon_active')
      })
      triggerIcons[index].classList.add('trigger-icon_active');

      accordionContents.forEach(accordionContent => {
        accordionContent.classList.remove('accordion-content_active')
      })
      accordionContents[index].classList.add('accordion-content_active');

      pricesRight.style.display = 'none';

    }

  })
})
