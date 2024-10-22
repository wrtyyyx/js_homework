'use strict';
import { createTodoElement } from './elements.js';
import getTodoHandlers from './hendlers.js';
import { storageKey } from './constants.js';
import { saveData } from './dataHendling.js';
import { editItemHandler, removeItemHandler } from './controlHendelers.js';

(function () {
  const todoForm = document.querySelector('[data-todo-form]');
  const todoListContainer = document.querySelector('#todoItems');

  const hendelFormData = ({ event, formData }) => {
    const saveFormData = saveData(formData);

    const todoElement = createTodoElement(saveFormData);
    todoListContainer.prepend(todoElement);
    event.target.reset();
  };

  const { handleFormSubmit, handleInputChange } = getTodoHandlers(
    todoForm,
    hendelFormData
  );

  todoForm.addEventListener('submit', handleFormSubmit);
  todoForm.addEventListener('input', handleInputChange);
  todoListContainer.addEventListener('click', removeItemHandler);
  todoListContainer.addEventListener('click', editItemHandler);
  document.addEventListener('DOMContentLoaded', () => {
    const savedData = JSON.parse(localStorage.getItem(storageKey));
    if (!savedData) return;
    savedData.forEach((todoItem) => {
      const todoElement = createTodoElement(todoItem);
      todoListContainer.prepend(todoElement);
    });
  });
})();
