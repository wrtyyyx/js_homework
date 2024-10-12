'use strict';
import { createTodoElement } from './elements.js';
import getTodoHandlers from './hendlers.js';
import { storageKey } from './constants.js';

(function () {
  const todoForm = document.querySelector('[data-todo-form]');
  const todoListContainer = document.querySelector('#todoItems');
  const saveData = (dataToSave) => {
    const savedData = localStorage.getItem(storageKey);
    const strinData = (dataToString) => {
      localStorage.setItem(storageKey, JSON.stringify(dataToString));
    };
    if (!savedData) {
      const prepearedData = [dataToSave];
      strinData(prepearedData);
    } else {
      const prepearedData = JSON.parse(savedData);
      prepearedData.push(dataToSave);
      strinData(prepearedData);
    }

    console.log(savedData);
  };

  const hendelFormData = ({ event, formData }) => {
    const todoElement = createTodoElement(formData);
    saveData(formData);
    todoListContainer.prepend(todoElement);
    event.target.reset();
  };

  const { handleFormSubmit, handleInputChange } = getTodoHandlers(
    todoForm,
    hendelFormData
  );

  todoForm.addEventListener('submit', handleFormSubmit);
  todoForm.addEventListener('input', handleInputChange);
  document.addEventListener('DOMContentLoaded', () => {
    const savedData = JSON.parse(localStorage.getItem(storageKey));
    savedData.forEach((todoItem) => {
      const todoElement = createTodoElement(todoItem);
      todoListContainer.prepend(todoElement);
    });
  });
})();
