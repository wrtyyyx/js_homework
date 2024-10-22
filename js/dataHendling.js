import { storageKey } from './constants.js';

export const getAllData = () => {
  const savedData = JSON.parse(localStorage.getItem(storageKey));
  if (savedData == null) return [];

  if (Array.isArray(savedData)) return savedData;
  return savedData; // Додаємо цю перевірку на випадок, якщо збережені дані не масив
};
const getItemId = () => {
  const savedData = getAllData();

  if (savedData === null || savedData.length === 0) {
    return 1;
  }
  return savedData.at(-1).id + 1;
};

export const setToStorage = (data) => {
  const prepareData = JSON.stringify(data);
  localStorage.setItem(storageKey, prepareData);
};
export const saveData = (dataToSave) => {
  const savedData = getAllData();
  const currentId = getItemId();
  const dataToSaveWithId = { ...dataToSave, id: currentId };
  savedData.push(dataToSaveWithId);
  setToStorage(savedData);
  return dataToSaveWithId;
};

export const removeData = (id) => {
  const savedData = getAllData();
  const index = savedData.findIndex((item) => item.id === id);

  savedData.splice(index, 1);
  setToStorage(savedData);
};
