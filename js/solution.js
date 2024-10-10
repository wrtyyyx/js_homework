'use strict';

const ul = document.querySelector('[data-list]');
const li = document.querySelectorAll('li');
const lastLi = document.querySelector('li:last-child');
const firstLi = document.querySelector('li:first-child');
console.log(ul.attributes);

// task 1

li.forEach((item) => {
  console.log(item.innerHTML);
});

// task 2

const dataGetAtribute = () => {
  const dataAttribute = [];

  for (const attr of ul.getAttributeNames()) {
    dataAttribute.push(ul.getAttribute(attr));
  }
  console.log(dataAttribute);
};
dataGetAtribute();

// task 3
const dataGetAttNames = () => {
  const dataNamesAttribute = [];
  for (const attName of ul.getAttributeNames()) {
    dataNamesAttribute.push(attName);
  }
  console.log(dataNamesAttribute);
};

dataGetAttNames();

// task 4

const changeLastItem = () => {
  lastLi.innerHTML = 'Привіт! Мене звуть Дмитро';
  console.log(lastLi.innerHTML);
};
changeLastItem();

// task 5
const changeFirstLi = () => {
  firstLi.setAttribute('data-my-name', 'Dmytro');
  console.log(firstLi);
};
changeFirstLi();

// task 6
ul.removeAttribute('data-dog-tail');
