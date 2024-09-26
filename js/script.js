'use strict';

const colum = 10;
const row = 10;
let num = 1;

const createTable = () => {
  const table = document.createElement('table');
  for (let tr = 0; tr < row; tr++) {
    const rowElement = document.createElement('tr');
    for (let td = 0; td < colum; td++) {
      const cell = document.createElement('td');
      rowElement.appendChild(cell);
      cell.innerHTML = num;
      num++;
    }
    table.appendChild(rowElement);
  }
  document.body.appendChild(table);
};

createTable();
