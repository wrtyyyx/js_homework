'use strict';

const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
  [33, 23, [23]],
];

const flat = function (arr, depth = 0) {
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item) && depth > 0) {
      result = result.concat(flat(item, depth - 1));
    } else result.push(item);
  });
  return result;
};

console.log(flat(complexArray, 4));
