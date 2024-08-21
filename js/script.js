'use strict';

const padString = function (str, lenth, char, direc = true) {
  if (typeof str !== 'string') {
    return 'Error: text error';
  }
  if (typeof lenth !== 'number' || lenth <= 0) {
    return 'Error: Lenth error';
  }
  if (typeof char !== 'string' || char.length !== 1) {
    return 'Error: char error';
  }
  if (typeof direc !== 'boolean') {
    return 'Error: Fourth argument must be a boolean';
  }

  if (str.length >= lenth) {
    return str.substring(0, lenth);
  }
  const add = char.repeat(lenth - str.length);

  if (direc) {
    return str + add;
  }
  return add + str;
};

console.log(padString('hello', 7, '*', true));
