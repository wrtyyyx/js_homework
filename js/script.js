'use strict';

// task 1
const getFactorial = (num) => (num !== 1 ? num * getFactorial(num - 1) : 1);
console.log(getFactorial(3));

// task 2
const pow = (num, degree) => (degree !== 0 ? num * pow(num, degree - 1) : 1);

console.log(pow(3, 2));

// task 3
const sum = (a, b) => (b !== 0 ? sum(a + 1, b - 1) : a);

console.log(sum(10, 24));
