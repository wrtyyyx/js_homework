"use strict";

const numOrStr = prompt("input number or string");
console.log(numOrStr);
console.log( typeof numOrStr);

switch (true){
  case numOrStr === null:
    alert('You cancel')
    break
  case numOrStr.trim() === '':
    alert('empty string')
    break
  case isNaN(+numOrStr) && !typeof numOrStr === 'number':
    alert('NaN number')
    break
  default:
    alert('ok')

}


// вроде все работает кроме нан, вообще не понимаю как