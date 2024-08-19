'use strict';

// task_1

console.log('=======TASK1=======');
for (let i = 10; i < 21; i++) {
  console.log(i);
}
// task_2
console.group('=======TASK2=======');
for (let i = 10; i < 21; i++) {
  console.log(i ** 2);
}
console.groupEnd();

// task_4
console.group('=======TASK3=======');
for (let i = 0; i < 11; i++) {
  console.log(i * 7);
}
console.groupEnd();

// task_4
console.group('=======TASK4=======');
for (let i = 1; i <= 15; i++) {
  console.log((i += 1));
}

console.groupEnd();

// task_5
console.group('=======TASK5=======');
for (let i = 15; i <= 35; i++) {
  console.log((i *= 1));
}

console.groupEnd();

// task_6
let sum = 0;
console.group('=======TASK6=======');
for (let i = 1; i <= 500; i++) {
  sum += i;
}
const result = sum / 500;
console.log(result);

console.groupEnd();

// task_7
console.group('=======TASK7=======');
let sumPar = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sumPar += i;
  }
}
console.log(sumPar);

console.groupEnd();

// task_8
console.group('=======TASK8=======');

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

console.groupEnd();

// task_9
console.group('=======TASK9=======');
const num = 36;
for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    console.log(i);
  }
}

console.groupEnd();
// task_10
console.group('=======TASK10=======');

for (let i = 1; i <= num; i++) {
  if (num % i === 0 && i % 2 === 0) {
    console.log(i);
  }
}

console.groupEnd();

// task_11
console.group('=======TASK11=======');
let sum11 = 0;
for (let i = 1; i <= num; i++) {
  if (num % i === 0 && i % 2 === 0) {
    sum11 += i;
  }
}
console.log(sum11);

console.groupEnd();
// task_11
console.group('=======TASK12=======');
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(` ${i} * ${j} = ${i * j}`);
  }
  console.log('-----------------------');
}

console.groupEnd();
