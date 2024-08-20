'use strict';

// task1
console.group('task 1');
for (let i = 20; i <= 30; i += 0.5) {
  console.log(i + ' ');
}
console.groupEnd();
// task2
console.group('task 2');
const price = 27;
for (let i = 10; i <= 100; i += 10) {
  console.log(`${i} dollars = ${price * i} uah`);
}
console.groupEnd();
// task3
console.group('task 3');
const num = 52;
for (let i = 1; i <= 100; i++) {
  if (i ** 2 <= num) {
    console.log(i);
  }
}

console.groupEnd();
// task4
console.group('task 4');
const isSimpleNumber = function (number = 0) {
  if (typeof num !== 'number' || isNaN(number) || !isFinite(number))
    return false;

  if (num < 1) return false;
  if (num === 1) return true;

  for (let i = 2; i < number; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

console.log(isSimpleNumber(1));
console.log(isSimpleNumber(5));
console.log(isSimpleNumber(20));
console.log(isSimpleNumber('asdfasd'));

console.groupEnd();
// task 5
console.group('task 5');
const number1 = 32;

function isPowerOfThree(n) {
  if (n < 1) return false;
  // делим n до того момента, когда оно будет = 1
  // если нет то тогда возврощается фолс, и число не степень числа 3
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
}

console.log(isPowerOfThree(number1));

console.groupEnd();
