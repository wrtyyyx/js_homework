'use strict';

const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
  [33, 23, [23]],
];
const flat = function (arr, result = []) {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      return flat(item, result);
    }
    result.push(item);
  });
  return result;
};

console.log(flat(complexArray));
