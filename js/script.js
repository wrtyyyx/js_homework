// task_1

const name = prompt('What is your name?');
const age = Number(prompt('What is your age?'));
const likesProgramming = confirm('Do you like programming?');


// task_2
console.log('name = '+ name);
console.log('age = ' + age);
console.log('likes programming: ' + likesProgramming);

console.log("---------- type of const ----------")

console.log('name = '+ typeof name);
console.log('age = ' + typeof age);
console.log('likes programming: ' + typeof likesProgramming);

console.log('--------------------------------------')
// task_3

const greeting = `Hello, ${name}!`;
alert(greeting);

// task_4

const numericAge = Number(age);

const nextAge = numericAge + 1;
console.log('nextAge = ' + nextAge);
console.log('--------------------------------------')
// task_5

let isAdult = age >= 18;
console.log(`is Adult: ${isAdult}`);