'use strict';

const dropdownButton = document.querySelector('.dropdown-button');
const dropdownButtonText = document.querySelector('.dropdown-button__text');
const dropdownButtonIcon = document.querySelector('.dropdown-button__icon');
const dropdownList = document.querySelector('.dropdown-list');
const citiesList = document.querySelectorAll('[data-list]');


const lists = document.querySelectorAll('.list');

const contactstRight = document.querySelector('.contacts-right');

const cities = document.createElement('div');
cities.classList.add('cities');

const contactstLeft = document.querySelector('.contacts-left');
const contactsWrapper = document.querySelector('.contacts-wrapper');

dropdownButton.addEventListener('click', (e) => {

  dropdownButton.classList.add('dropdown-button_active');
  dropdownButtonIcon.classList.add('dropdown-button__icon_active');
  dropdownList.classList.add('dropdown-list_active');
});

const pullCard = (dataList) => fetch('./js/contact.json')
  .then(res => {
    if (res.ok) {
      return res.json()
    } else {
      console.log('ERROR');
      throw Error;
    }
  })
  .then(data => {
    data.forEach(card => {
      if(card.id == dataList){
        cities.innerHTML = `
            <div class="cities-wrapper">
              <div class="cities-card">
                <div class="card-line">
                  <span class="card-line__title">City:</span>
                  <span class="card-line__text">${card.city}</span>
                </div>

                <div class="card-line">
                  <span class="card-line__title">Phone:</span>
                  <span class="card-line__text">${card.phone}</span>
                </div>

                <div class="card-line">
                  <span class="card-line__title">Office adress:</span>
                  <span class="card-line__text">${card.adress}</span>
                </div>
                <div class="card-button">
                  <a class="button-call" href="tel:${card.phone.replaceAll(" ", "")}">
                    <p class="button-text">Call us</p>
                  </a>
                </div>
              </div>
            </div>
        `;
        contactstRight.append(cities)
      }
    
    })
  })
  .catch(error => {
    alert('Ошибка: ' + error.messenger)
  });

lists.forEach((list) => {
  list.addEventListener('click', (e) => {
    const dataList = e.target.dataset.list; 
    pullCard(dataList);
    dropdownList.classList.remove('dropdown-list_active');
    dropdownButtonIcon.classList.remove('dropdown-button__icon_active');

    dropdownButtonText.innerText = e.target.innerText;

    if (document.documentElement.clientWidth <= 380) {
      contactstLeft.style.display = 'none';
      contactsWrapper.style.flexDirection = 'column';
    }
  })
});

window.addEventListener('click', (e) => {
  if (!e.target.classList.contains('dropdown-button') && !e.target.parentElement.classList.contains('dropdown-button') && !e.target.classList.contains('dropdown-list') && !e.target.classList.contains('list')) {
    dropdownButtonIcon.classList.remove('dropdown-button__icon_active');
    dropdownList.classList.remove('dropdown-list_active');
    // dropdownButton.classList.remove('dropdown-button_active');
  };

});