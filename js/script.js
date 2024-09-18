'use strict';

const phones = [
  {
    model: 'Samsung',
    color: 'green',
    price: 2000,
  },
  {
    model: 'iphone',
    color: 'gold',
    price: 22000,
  },
  {
    model: 'xiaomi',
    color: 'pink',
    price: 999,
  },
];

const getPhoneInfo = function () {
  console.log(
    this.model + ' is color ' + this.color + ' and its price =  ' + this.price
  );
  console.log('----');
};

for (const phone of phones) {
  const phoneInfo = getPhoneInfo.bind(phone, [`Hello my dear ${phone.model}`]);
  phoneInfo();
}
