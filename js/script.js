'use strict';

const insertWordInto = function (str) {
  let insCount = 0;

  return function (word) {
    const words = str.split(' ');

    if (insCount === 0) {
      const mid = Math.floor(words.length / 2);
      words.splice(mid, 0, word);
    } else if (insCount === 1) {
      words.unshift(word);
    } else if (insCount === 2) {
      words.push(word);
    }
    insCount++;
    return words.join(' ');
  };
};
const insert = insertWordInto('hello world');

const result = insert('Odesa'); // -> 'hello Odesa world'
const secondResult = insert('Odesa'); // -> 'Odesa hello world'
const thirdResult = insert('Odesa'); // -> 'hello world Odesa'
console.log(result);
console.log(secondResult);
console.log(thirdResult);
