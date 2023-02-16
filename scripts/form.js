'use strict';

const form = document.querySelector('.form');
const clearButton = document.querySelector('#clearButton');
const setButton = document.querySelector('#setButton');
const input = document.querySelector('#myInput');
const newParag = document.createElement('p');


newParag.classList = 'body__new-parag';
upDateParag();
form.insertAdjacentElement('beforebegin', newParag);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!input.value) {
    return;
  }

  localStorage.setItem('num23', JSON.stringify(input.value));
  upDateParag();
  form.reset();
});

clearButton.addEventListener('click', (e) => {
  localStorage.removeItem('num23');
  form.reset();
  clearParag();
});

input.addEventListener('input', () => {
  if (input.value) {
    document.querySelector('#setButton').disabled = false;
    return;
  }

  document.querySelector('#setButton').disabled = true;
})

function clearParag() {
  newParag.classList = 'body__new-parag';
  newParag.innerText = '';
  setButton.disabled = true;
};

function upDateParag() {
  if (!localStorage.getItem('num23')) {
    return;
  }

  const currentValue = JSON.parse(localStorage.getItem('num23'));

  newParag.innerText = currentValue;

  if (+currentValue % 2 === 0 && +currentValue !== 0) {
    newParag.classList.remove('body__new-parag--red')
    newParag.classList.add('body__new-parag--green');
  } else {
    newParag.classList.remove('body__new-parag--green')
    newParag.classList.add('body__new-parag--red');
  }

  input.focus();
  setButton.disabled = true;
};
