const getTodoHandlers = (...args) => {
  // variables

  let isSubmitButtonDisabled = true;
  const [todoForm, hendelFormData] = args;
  const formInputs = Array.from(todoForm.querySelectorAll('input,textarea'));

  if (args.length < 2) throw new Error('you should enter 2 arguments');
  if (!(todoForm instanceof HTMLFormElement))
    throw new Error('first argument should be HTMLFormElements');

  // eslint-disable-next-line no-shadow
  const fieldValidity = formInputs.reduce((fieldValidity, { name }) => {
    // eslint-disable-next-line no-param-reassign
    fieldValidity[name] = false;
    return fieldValidity;
  }, {});

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isSubmitButtonDisabled) return;

    const formData = formInputs.reduce((acc, { name, value }) => {
      acc[name] = value;
      return acc;
    }, {});

    hendelFormData({ event, formData });
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
export default getTodoHandlers;
