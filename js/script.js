'use strict';
let user = {
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: {
      a1: 1,
      b1: 2,
      c1: 3,
      d1: {
        a2: 3,
        b2: 3,
        c2: 3,
      },
    },
  },
};

const DeepFreeze = (object) => {
  for (const key in object) {
    if (typeof object[key] === 'object' || object[key] !== null) {
      DeepFreeze(object[key]);
      Object.freeze(object[key]);
    }
  }
};
DeepFreeze(user);

user.data.d.d1.a2 = 5;
