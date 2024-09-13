// 'use strict';
// // 1
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
//
// const arrSplit = arr1.concat(...arr2);
// console.log(arrSplit);
// // 2
// const arrRev = [1, 2, 3].reverse();
// console.log(arrRev);
// // 3
// const arrAddLast = [1, 2, 3];
// arrAddLast.push(4, 5, 6);
// console.log(arrAddLast);
// // 4
// const arrAddStart = [1, 2, 3];
// arrAddStart.unshift(4, 5, 6);
// console.log(arrAddStart);
//
// // 5
//
// const html = ['js', 'css', 'jq'];
// console.log(html[0]);
//
// // 6
// console.log(html[html.length - 1]);
//
// // 7
// const arr3 = [1, 2, 3, 4, 5];
// const arrSplice = arr3.splice(0, 3);
// console.log(arrSplice);
//
// // 8
// const arrSplice2 = [1, 2, 3, 4, 5].splice(3, 2);
// console.log(arrSplice2);
//
// // 9
//
// const arrSplice3 = [1, 2, 3, 4, 5];
// arrSplice3.splice(1, 2);
// console.log(arrSplice3);
//
// // 10
// const arrSplice4 = [1, 2, 3, 4, 5].splice(1, 3);
// console.log(arrSplice4);
//
// // 11
// const arrSplice5 = [1, 2, 3, 4, 5];
// arrSplice5.splice(3, 0, 'a', 'b', 'c');
// console.log(arrSplice5);
//
// // 12
// const arrSplice6 = [1, 2, 3, 4, 5];
// arrSplice6.splice(1, 0, 'a', 'b');
// arrSplice6.splice(6, 0, 'c');
// arrSplice6.splice(8, 0, 'e');
// console.log(arrSplice6);
//
// //13
//
// const arrSort = [3, 4, 1, 2, 7];
// arrSort.sort((a, b) => a - b);
// console.log(arrSort);
//
// // 14
// console.log('+++++++');
// const arrReduce = [5, 6, 7, 8, 9];
// const sarrReduce = arrReduce.reduce((accum, item) => {
//   accum += item;
//   return accum;
// }, 0);
// console.log(sarrReduce);
//
// // 15
//
// const arrPow = [5, 6, 7, 8, 9];
// const arrPowMap = arrPow.map((item) => {
//   let result = [];
//
//   result = item ** 2;
//
//   return result;
// });
// console.log(arrPowMap);
//
// // 16
// const arrMin = [1, -3, 5, 6, -7, 8, 9, -11];
// const arrMinFilter = arrMin.filter((item) => {
//   return item < 0;
// });
//
// console.log(arrMinFilter);
//
// // 17
//
// const arrPar = [1, -3, 5, 6, -7, 8, 9, -11];
// const arrParFil = arrPar.filter((item) => {
//   return item % 2 === 0;
// });
// console.log(arrParFil);
//
// //18
//
// const arrStr = ['aaa', 'aaaqqq', 'zzzqq', 'zzzzzzzzzz', 'qsaa', 'q', 'az'];
// const arrStrFil = arrStr.filter((item) => {
//   return item.length > 5;
// });
// console.log(arrStrFil);
//
// // 19
//
// const arrPod = [1, 2, [3, 4], 5, [6, 7]];
// const arrPodFil = arrPod.filter((item) => {
//   return Array.isArray(item);
// });
// console.log(arrPodFil);
//
// // 20
// const arrMins = [5, -3, 6, -5, 0, -7, 8, 9];
// const arrMinsMap = arrMins.filter((item) => {
//   return item < 0;
// }).length;
// console.log(arrMinsMap);
// // const arrMinsSum = arrMinsMap.reduce((accum, item) => {
// //   let result = accum + item;
// //   return result;
// // }, 0);
// // console.log(arrMinsSum);
//
// // ____________________________
//
// // 1
// const arr = ['a', 'b', 'c', 'd'];
// let result = arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3];
// console.log(result);
//
// // 4
//
// const obj = {
//   js: ['jQuery', 'Angular'],
//   php: 'hello',
//   css: 'world',
// };
// console.log(obj.js[0]);

let a = 'Hello JS';

function first() {
  console.log('Внутри первой функции');
  second(); // Викликається функція second()
  console.log('Опять внутри первой функции');
}

function second() {
  console.log('Внутри второй функции');
}

first(); // Викликається функція first()

console.log('Внутри глобального контекста выполнения');
