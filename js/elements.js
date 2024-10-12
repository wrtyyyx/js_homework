export const createTodoElement = ({ title, description }) => {
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
