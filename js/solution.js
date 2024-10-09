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

const dataAttribute = [];

for (const attr of ul.getAttributeNames()) {
  dataAttribute.push(ul.getAttribute(attr));
}
console.log(dataAttribute);

// task 3

const dataNamesAttribute = [];
for (const attName of ul.getAttributeNames()) {
  dataNamesAttribute.push(attName);
}
console.log(dataNamesAttribute);

// task 4

lastLi.innerHTML = 'Привіт! Мене звуть Дмитро';
console.log(lastLi.innerHTML);

// task 5

firstLi.setAttribute('data-my-name', 'Dmytro');
console.log(firstLi);

// task 6
ul.removeAttribute('data-dog-tail');
