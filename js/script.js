'use strict';

const appendHTMLElement = (parentEl = null, elementToAppend = null) => {
  if (!parentEl || !elementToAppend) return;
  parentEl.append(elementToAppend);
};

const generateTable = () => document.createElement('table');

const createTable = (colum = 2, row = 2) => {
  let num = 1;
  const table = generateTable();

  for (let i = 0; i < row; i++) {
    const rowElement = document.createElement('tr');
    for (let j = 0; j < colum; j++) {
      const td = document.createElement('td');
      rowElement.appendChild(td);
      td.innerHTML = num;

      function nextNum() {
        num++;
        return num;
      }

      nextNum();
    }

    table.appendChild(rowElement);
  }
  document.body.appendChild(table);
  console.log(num);
};

appendHTMLElement(document.body, createTable(10, 10));
