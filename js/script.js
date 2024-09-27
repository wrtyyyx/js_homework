'use strict';

const colum = 10;
const row = 10;
let num = 1;

const createTable = () => {
  const table = document.createElement('table');
  for (let i = 0; i < row; i++) {
    const rowElement = document.createElement('tr');
    for (let j = 0; j < colum; j++) {
      const td = document.createElement('td');
      rowElement.appendChild(td);
      td.innerHTML = num;
      num++;
    }
    table.appendChild(rowElement);
  }
  document.body.appendChild(table);
};

createTable();
