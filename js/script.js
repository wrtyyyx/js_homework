'use strict';

// task 1
// const array = [1, 2, 'SD', 'ds', true, 43, 2];
// const aref = function (arr) {
//   const arrOfNum = arr.filter((item) => typeof item === 'number');
//   let sum = 0;
//   for (let i = 0; i < arrOfNum.length; i++) {
//     sum += arrOfNum[i];
//   }
//   return arrOfNum.length ? sum / arrOfNum.length : alert('check arr');
// };
//
// console.log(aref(array));

// task 2
// const doMath = function (x, znak, y) {
//   let result = 0;
//   if (typeof x !== 'number' || typeof y !== 'number') {
//     return alert('check x or y');
//   }
//   switch (znak) {
//     case '+':
//       result = x + y;
//       break;
//     case '-':
//       result = x - y;
//       break;
//     case '*':
//       result = x * y;
//       break;
//     case '/':
//       if (y !== 0) {
//         result = x / y;
//       }
//       return alert('Na 0 ne delim');
//     case '%':
//       result = x % y;
//       break;
//     case '^':
//       result = x ** y;
//       break;
//     default:
//       alert('Invalid operator');
//   }
//   return result;
// };
// console.log(
//   doMath(+prompt('enter x'), prompt('enter znak'), +prompt('enter y'))
// );

// const makeArr = function () {
//   const mainArrLenght = +prompt('Enter main array size', 10);
//
//   let mainArr = [];
//
//   for (let i = 0; i < mainArrLenght; i++) {
//     const secondArrayLength = +prompt(`Enter second array size ${i + 1} `, 10);
//
//     const secondArr = [];
//     for (let j = 0; j < secondArrayLength; j++) {
//       const item = prompt(
//         `Enter value for element ${j + 1} of inner array ${i + 1}:`
//       );
//       secondArr.push(item);
//     }
//     mainArr.push(secondArr);
//   }
//   return mainArr;
// };
//
// console.log(makeArr());

// const removeCharacters = function (str, item) {
//   const result = str
//     .split('')
//     .filter((char) => !item.includes(char))
//     .join('');
//   return result;
// };
//
// const result = removeCharacters('hello world', ['l', 'd']);
// console.log(result);
