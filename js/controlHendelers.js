import { editBtn, removeBtn, todoItemContainer } from './constants.js';
import { removeData } from './dataHendling.js';

const editModal = new bootstrap.Modal('#editTodoModal', {
  backdrop: 'static',
  focus: true,
  keyboard: false,
});
// console.log(editModal);

const validateTarget = (target, selector) => {
  if (!target.closest(selector)) return true;
  return false;
};

const findWrapperContainer = (target) => {
  const element = target.closest(todoItemContainer.selector);
  const id = Number(element.getAttribute(todoItemContainer.attr));

  return { element, id }; // Повертаємо з малих літер
};

export const removeItemHandler = ({ target }) => {
  if (validateTarget(target, removeBtn.selector)) return;
  const { element: WraperElement, id: todoItemId } =
    findWrapperContainer(target);
  removeData(todoItemId);
  WraperElement.remove();
};

export const editItemHandler = ({ target }) => {
  if (validateTarget(target, editBtn.selector)) return;
  editModal.show();
};
