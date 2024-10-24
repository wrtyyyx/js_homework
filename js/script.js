'use strict';

const product = {
  quantity: 12,
};
// name

Object.defineProperty(product, 'name', {
  value: 'Iphone',
  writable: true,
  enumerable: true,
  configurable: true,
});
if (typeof product.name !== 'string' || product.name.trim().length === 0) {
  Object.defineProperty(product, 'name', {
    writable: false,
  });
  throw new Error('Value of property name must be a string');
}
// price
Object.defineProperty(product, 'price', {
  value: 49990,
  writable: true,
  enumerable: true,
  configurable: true,
});

if (typeof product.price !== 'number' || product.price < 0) {
  Object.defineProperty(product, 'price', {
    writable: false,
  });
  throw new Error('Value of property price must be a number and more than 0');
}
// totalValue
Object.defineProperty(product, 'totalValue', {
  get() {
    return `TOTAL = ${this.price * this.quantity}`;
  },
});
console.log(product);
console.log(product.totalValue);
