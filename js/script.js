'use strict';

const input = document.querySelector('[data-input]');

const divGhost = document.querySelector('[data-div-priv]');

input.addEventListener('focus', () => {
  divGhost.style.opacity = '0';
});
input.addEventListener('blur', () => {
  divGhost.style.opacity = '1';
});
