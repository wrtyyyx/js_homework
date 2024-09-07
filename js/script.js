'use strict';

const removeSymbols = (str, symbolesToRemove = []) => {
  if (typeof str !== 'string') throw new Error('str must be a string');
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (symbolesToRemove.includes(str[i])) continue;
    result.push(str[i]);
  }
  return result.join('');
};

const findPhoneNumbersByBalace = (
  arr,
  minBalance = 0,
  keys = {
    balance: 'balance',
    phone: 'phone',
  }
) => {
  if (!Array.isArray(arr)) return [];
  if (typeof minBalance !== 'number') return [];
  const result = [];

  arr.forEach((item) => {
    const normalizedBalance = +removeSymbols(item[keys.balance], ['$', ',']);
    if (normalizedBalance > minBalance) result.push(item[keys.phone]);
  });
  return result;
};

console.log(findPhoneNumbersByBalace(users, 2000));

const getAvgBalance = (arr, balanceKey = 'balance') => {
  if (!Array.isArray(arr)) throw new Error('arr should be an array');
  if (typeof balanceKey !== 'string')
    throw new Error('balanceKey should be a string');

  const sum = arr.reduce((accum, item) => {
    const normalizedBalance = +removeSymbols(item[balanceKey], ['$', ',']);
    const reduceBalance = accum + normalizedBalance;
    return +reduceBalance.toFixed(2);
  }, 0);
  return sum;
};
console.log(getAvgBalance(users));
