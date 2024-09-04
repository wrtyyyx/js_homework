'use strict';

const lengths = +prompt('Enter arr lenght') + 1;

const arr = new Array(lengths);

for (let i = 0; i < lengths; i++) {
  arr[i] = +prompt(`Enter item for ${i + 1} place`);
}
arr.sort((a, b) => a - b);
console.log(arr);
arr.splice(1, 2);
console.log(arr);
