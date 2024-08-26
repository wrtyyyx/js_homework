// const fact = function (n) {
//   let factorial = 1;
//   if (n == 0) return factorial;
//
//   for (let i = 1; i <= n; i++) {
//     factorial *= i;
//   }
//   return factorial;
// };
//
// console.log(fact(10));

const square = function (number) {
  return number ** 2;
};
console.log(square(10));

const isEven = function (number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

console.log(isEven(3));

const maxOfThree = function (a, b, c) {
  if (a > b) {
    if (a > c) return a;
    return c;
  } else {
    if (b > c) return b;
    return c;
  }
};
console.log(maxOfThree(10, 20, -1));

const isPalindrome = function (str) {
  if (str.split('').reverse().join('') === str) {
    return true;
  }
  return false;
};
console.log(isPalindrome('radard'));

const countVowels = function (str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};

console.log(countVowels('JavaScriiipt'));

const averege = function (numbers) {
  let sum = 0;
  for (let i = 0; i < ; i++) {}
};
console.log(average([1, 2, 3, 4, 5]));
