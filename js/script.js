"use strict";
const num1 = prompt('Enter your number 1');
const num2 = prompt('Enter your number 2');
const num3 = prompt('Enter your number 3');
if (num1 ===null || num2===null || num3 === null ){
    alert("You must enter a number");
} else{
        const parsedNum1 = parseFloat(num1)
        const parsedNum2 = parseFloat(num2)
        const parsedNum3 = parseFloat(num3)
    if (isNaN(parsedNum1)|| isNaN(parsedNum2) || isNaN(parsedNum3)){
        alert("Please enter a valid number");
    }else {
        const result = (parsedNum1 + parsedNum2 + parsedNum3)/3
        alert('result: ' + result);
    }
}
console.log(num1);
console.log(num2);
console.log(num3);

