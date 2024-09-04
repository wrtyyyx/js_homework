'use strict';

const exponentiation = function (num1, num2) {
  return alert(num1 ** num2);
};
const multiplay = (num1, num2) => {
  const result = num1 * num2;
  return alert(`${num1} * ${num2} = ${result}`);
};
const division = (num1, num2) => {
  const devResult = num1 / num2;
  return alert(`${num1} / ${num2} = ${devResult}`);
};
const modulo = (num1, num2) => {
  const modResult = num1 % num2;
  return alert(`${num1} % ${num2} = ${modResult}`);
};

const mainFunction = function (pow) {
  const num1 = +prompt('Enter first nuber: ');
  const num2 = +prompt('Enter second nuber: ');

  return pow(num1, num2);
};

console.log(mainFunction(exponentiation));
console.log(mainFunction(multiplay));
console.log(mainFunction(division));
console.log(mainFunction(modulo));
