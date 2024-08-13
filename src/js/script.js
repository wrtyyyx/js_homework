"use strict";

// let numOrStr = prompt('input number or string');
// console.log(numOrStr)
//
// if(numOrStr === null) {
//     console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
//     console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
//     console.log(' number is Ba_NaN')
// } else {
//     console.log('OK!')
// }

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
  case isNaN(+numOrStr) && typeof +numOrStr === 'string':
    alert('NaN number')
    break
  default:
    alert('ok')

}
