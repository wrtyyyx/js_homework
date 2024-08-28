'use strict';

const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = function (arr, item) {
  const index = arr.indexOf(item);

  if (Number.isNaN(item)) {
    return alert('sasha dast nogi!');
  }

  if (!arr.includes(item)) {
    alert(`${item} is not in arr`);
  } else {
    arr.splice(index, 1);
  }
  return arr;
};

removeElement(array, +prompt('Enter a number'));
console.log(array);
