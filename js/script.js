'use strict';

const sum = () => {
  let result = 0;
  const sumNum = (nums) => {
    result += nums;
    return result;
  };

  return sumNum;
};

const result = sum();
console.log(result(12));
console.log(result(14));
