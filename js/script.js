'use strict';

const user = {
  get name() {
    return this._name;
  },
  set name(value) {
    this._name = value;
  },
  get age() {
    return this._age;
  },
  set age(value) {
    if (typeof value === 'number' && value >= 0 && value <= 120) {
      this._age = value;
    } else {
      throw new Error('check age');
    }
  },
};

user.age = 102;
user.name = 'dima';
console.log(user);

user.age = 323;
