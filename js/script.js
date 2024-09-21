'use strict';

const phones = {
  model: 'iphone',
  color: 'black',
  price: 40000,
};

const getPhoneInfo = function () {
  return `${this.model} is color ${this.color} and its price =  ${this.price}`;
};

const myApply = (func, contex, ...args) => {
  let reuslt = null;
  contex.func = func;
  reuslt = contex.func(...args);
  delete contex.func;
  return reuslt;
};
const myBind = (func = null, context = undefined, args = []) => {
  if (!func) return undefined;
  return function () {
    return myApply(func, context, ...args);
  };
};

const result = myBind(getPhoneInfo, phones);
console.log(result());
