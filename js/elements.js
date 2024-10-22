import { removeBtn, todoItemContainer, editBtn } from './constants.js';
export const createTodoElement = ({ title, description, id }) => {
  const todoWrapper = document.createElement('div');
  todoWrapper.className = 'col-4';
  todoWrapper.setAttribute(todoItemContainer.attr, id);

  todoWrapper.innerHTML = `
            <div class="taskWrapper">
                <div class="taskHeading">${id} | ${title}</div>
                <div class="taskDescription">${description}</div>
                <hr>
                <button class="btn btn-danger" ${removeBtn.attr}><i class="bi bi-trash3-fill"></i></button>
                <button class="btn btn-primary" ${editBtn.attr}><i class="bi bi-pencil-square"></i></button>
            </div>`;

  return todoWrapper;
};
