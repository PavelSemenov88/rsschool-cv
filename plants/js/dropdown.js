'use strict';

const dropdownButton = document.querySelector('.dropdown-button');
const dropdownButtonText = document.querySelector('.dropdown-button__text');
const dropdownButtonIcon = document.querySelector('.dropdown-button__icon');
const dropdownList = document.querySelector('.dropdown-list');

const lists = document.querySelectorAll('.list');

const cities = document.querySelectorAll('.cities');

dropdownButton.addEventListener('click', () => {
  dropdownButton.classList.toggle('dropdown-button_active');
  dropdownButtonIcon.classList.toggle('dropdown-button__icon_active');
  dropdownList.classList.toggle('dropdown-list_active');
})

lists.forEach((list) => {
  
  list.addEventListener('click', (e) => {
    dropdownButtonText.innerText = e.target.innerText;
    const dataList = list.dataset.list;

    cities.forEach((city) => {
      const dataCity = city.dataset.cities;

      if (dataList === dataCity) {
        city.classList.add('cities-active');
      } else {
        city.classList.remove('cities-active');
      }
    })

  })
})

window.addEventListener('click', (e) => {
  if (!e.target.classList.contains('dropdown-button') && !e.target.parentElement.classList.contains('dropdown-button') && !e.target.classList.contains('dropdown-list')) {
    dropdownButton.classList.remove('dropdown-button_active');
    dropdownButtonIcon.classList.remove('dropdown-button__icon_active');
    dropdownList.classList.remove('dropdown-list_active');
  }
})