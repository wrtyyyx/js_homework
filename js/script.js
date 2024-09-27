'use strict';

const IMG_PATH = './img/';
const IMG_FORMAT = '.jpg';
const imgRandom = () => Math.floor(Math.random() * 9) + 1;

const img = document.createElement('img');
img.src = `${IMG_PATH}${imgRandom()}${IMG_FORMAT}`;
document.body.append(img);
