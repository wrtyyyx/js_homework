'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(characters.length);

const generateKey = function (lenth, text) {
  let key = '';

  for (let i = 0; i < lenth; i++) {
    const random = Math.floor(Math.random(text) * text.length);
    key += text[random];
  }
  return key;
};

const result = generateKey(16, characters);
console.log(result);
