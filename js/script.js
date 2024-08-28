'use strict';
const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = function (arr, item) {
  const index = arr.indexOf(item);

  if (!arr.includes(item)) {
    alert(`${item} is not in arr`);
  } else {
    arr.splice(index, 1);
  }
  return arr;
};

removeElement(array, 10);
console.log(array);
