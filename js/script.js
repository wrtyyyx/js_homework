'use strict';

const docBody = document.body;
console.log(docBody);

const imgRandom = Math.floor(Math.random() * 9) + 1;
console.log(imgRandom);

const img = document.getElementById('img');
img.src = `img/${imgRandom}.jpg`;
