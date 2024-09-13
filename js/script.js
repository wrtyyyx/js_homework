'use strict';

const varDemo = () => {
  for (let i = 0; i < 1; i++) {
    var varDemo = ' vard';
    let letDemo = 'let demo';
    const constDemo = 'const demo';

    console.log(varDemo);
    console.log(letDemo);
    console.log(constDemo);
  }

  console.log(varDemo); // у var все хорошо
  console.log(letDemo); // переменная let обьявленна в цикле => ошибка, TDZ
  console.log(constDemo); // переменная const обьявленна в цикле => ошибка TDZ
};

varDemo();
