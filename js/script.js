'use strict';

const appendItem = (parentEl = null, elToAppend = null) => {
  if (!parentEl || !elToAppend) return;
  parentEl.append(elToAppend);
};

const generateList = (array) => {
  if (!Array.isArray(array) || !array) throw new Error('check data');

  const list = document.createElement('ul');

  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    const listElement = document.createElement('li');

    if (Array.isArray(item)) {
      const nestedList = generateList(item);
      appendItem(listElement, nestedList);
    } else {
      listElement.innerHTML = item;
    }

    appendItem(list, listElement);
  }
  return list;
};

const result = generateList([1, 2, 4, [32, 2], 4]);
appendItem(document.body, result);
