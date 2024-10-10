'use strict';
(function () {
  const todoForm = document.querySelector('[data-todo-form]');

  const todoListContainer = document.querySelector('#todoItems');

  const createTodoElement = ({ title, description }) => {
    const todoWrapper = document.createElement('div');
    todoWrapper.className = 'col-4';

    todoWrapper.innerHTML = `
            <div class="taskWrapper">
                <div class="taskHeading">${title}</div>
                <div class="taskDescription">${description}</div>
                <button data-btn-delete class="btn btn-danger">Delete</button>
            </div>`;
    const btnDel = todoWrapper.querySelector('button');
    btnDel.addEventListener('click', () => {
      todoWrapper.style.display = 'none';
    });
    return todoWrapper;
  };

  const getTodoHandlers = () => {
    const fieldValidity = {};
    let isSubmitButtonDisabled = true;

    const initializeForm = () => {
      todoForm.querySelectorAll('input,textarea').forEach(({ name }) => {
        fieldValidity[name] = false;
      });
    };
    initializeForm();
    console.log(fieldValidity);

    const handleFormSubmit = (event) => {
      event.preventDefault();
      if (isSubmitButtonDisabled) return;

      const formInputs = event.target.querySelectorAll('input,textarea');

      const formData = Array.from(formInputs).reduce((acc, { name, value }) => {
        acc[name] = value;
        return acc;
      }, {});

      const todoElement = createTodoElement(formData);
      todoListContainer.prepend(todoElement);
      event.target.reset();
    };

    const handleInputChange = ({ target }) => {
      const submitButton = todoForm.querySelector('button[type=submit]');

      if (target.value.trim().length) {
        if (!fieldValidity[target.name]) fieldValidity[target.name] = true;
      } else {
        if (fieldValidity[target.name]) fieldValidity[target.name] = false;
      }

      isSubmitButtonDisabled = !Object.values(fieldValidity).every(
        (isValid) => isValid
      );

      if (!isSubmitButtonDisabled) {
        submitButton.removeAttribute('disabled');
      } else {
        submitButton.setAttribute('disabled', '');
      }
    };

    return { handleInputChange, handleFormSubmit };
  };

  const { handleFormSubmit, handleInputChange } = getTodoHandlers();

  todoForm.addEventListener('submit', handleFormSubmit);
  todoForm.addEventListener('input', handleInputChange);
})();
