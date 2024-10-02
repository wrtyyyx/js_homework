'use strict';

const IMG_PATH = './img/';
const IMG_FORMAT = '.jpg';
const appendHTMLElement = (parentEl = null, elementToAppend = null) => {
  if (!parentEl || !elementToAppend) return;
  parentEl.append(elementToAppend);
};

const imgRandom = () => {
  const num = Math.floor(Math.random() * 10);
  return num;
};

const generateImg = (imgName) => {
  const img = document.createElement('img');
  img.src = `${IMG_PATH}${imgName + IMG_FORMAT}`;
  return img;
};
const imgToAppend = generateImg(imgRandom());
console.log(imgRandom());
appendHTMLElement(document.body, imgToAppend);
