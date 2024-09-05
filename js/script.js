// 'use strict';
//
// const arr = [
//   16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
//   76, -4, 12, -35, 4, 47,
// ];
//
// console.log(arr);
//
// // task 1
// const arrPlus = arr.filter((item) => {
//   return item >= 0;
// });
//
// const arrPlusSum = () => {
//   let arrSum = 0;
//   for (let i = 0; i < arrPlus.length; i++) {
//     arrSum += arrPlus[i];
//   }
//   return arrSum;
// };
// console.log(arrPlus.length);
// console.log(arrPlusSum());
//
// // task 2
//
// const minEl = Math.min(...arr);
// console.log(minEl);
// console.log(arr.indexOf(minEl));
//
// // taks 3
// const maxEl = Math.max(...arr);
// console.log(maxEl);
// console.log(arr.indexOf(maxEl));
//
// // task 4
//
// const arrMinus = arr.filter((item) => {
//   return item <= 0;
// });
// console.log(arrMinus.length);
//
// // task 5
//
// const arrNePar = arr.filter((item) => {
//   return item % 2 !== 0 && item > 0;
// });
//
// console.log(arrNePar, `кількість ${arrNePar.length} шт не парних`);
//
// // task 6
//
// const arrPar = arr.filter((item) => {
//   return item % 2 == 0 && item > 0;
// });
//
// console.log(arrPar, `кількість ${arrPar.length} шт парних`);
// // task 7
//
// const arrParSum = () => {
//   let result = 0;
//   for (let i = 0; i < arrPar.length; i++) {
//     result += arrPar[i];
//   }
//   return result;
// };
// console.log(arrParSum());
//
// // task 8
//
// const arrNeParSum = () => {
//   let result = 0;
//   for (let i = 0; i < arrNePar.length; i++) {
//     result += arrNePar[i];
//   }
//   return result;
// };
// console.log(arrNeParSum());
//
// // task 9
//
// const posit = () => {
//   let positResult = 1;
//   for (let i = 0; i < arrPar.length; i++) {
//     positResult *= arrPar[i];
//   }
//
//   return positResult;
// };
// console.log(posit());
//
// // task 10
//
// const max = arr.map((maxItem) => {
//   return maxItem === maxEl ? maxItem : 0;
// });
//
// console.log(max);

// Додав коментарі через гпт бо ліньки :)
'use strict';

const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

console.log('Масив:', arr);

// task 1
const arrPlus = arr.filter((item) => {
  return item >= 0;
});

const arrPlusSum = () => {
  let arrSum = 0;
  for (let i = 0; i < arrPlus.length; i++) {
    arrSum += arrPlus[i];
  }
  return arrSum;
};

console.log('Кількість позитивних елементів:', arrPlus.length);
console.log('Сума позитивних елементів:', arrPlusSum());

// task 2
const minEl = Math.min(...arr);
console.log('Мінімальний елемент масиву:', minEl);
console.log('Індекс мінімального елемента:', arr.indexOf(minEl));

// task 3
const maxEl = Math.max(...arr);
console.log('Максимальний елемент масиву:', maxEl);
console.log('Індекс максимального елемента:', arr.indexOf(maxEl));

// task 4
const arrMinus = arr.filter((item) => {
  return item <= 0;
});
console.log('Кількість негативних елементів:', arrMinus.length);

// task 5
const arrNePar = arr.filter((item) => {
  return item % 2 !== 0 && item > 0;
});

console.log('Непарні позитивні елементи:', arrNePar);
console.log('Кількість непарних позитивних елементів:', arrNePar.length);

// task 6
const arrPar = arr.filter((item) => {
  return item % 2 == 0 && item > 0;
});

console.log('Парні позитивні елементи:', arrPar);
console.log('Кількість парних позитивних елементів:', arrPar.length);

// task 7
const arrParSum = () => {
  let result = 0;
  for (let i = 0; i < arrPar.length; i++) {
    result += arrPar[i];
  }
  return result;
};

console.log('Сума парних позитивних елементів:', arrParSum());

// task 8
const arrNeParSum = () => {
  let result = 0;
  for (let i = 0; i < arrNePar.length; i++) {
    result += arrNePar[i];
  }
  return result;
};

console.log('Сума непарних позитивних елементів:', arrNeParSum());

// task 9
const posit = () => {
  let positResult = 1;
  for (let i = 0; i < arrPar.length; i++) {
    positResult *= arrPar[i];
  }
  return positResult;
};

console.log('Добуток позитивних елементів:', posit());

// task 10
const max = arr.map((maxItem) => {
  return maxItem === maxEl ? maxItem : 0;
});

console.log('Масив з найбільшим елементом, інші обнулені:', max);
