// store.js
import { createStore } from 'redux';
import cartReducer from './reducer';

// Функция для загрузки состояния из localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Функция для сохранения состояния в localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch (err) {
    // игнорируем ошибки записи в localStorage
  }
};

// Создаем хранилище, передавая начальное состояние
const store = createStore(cartReducer, loadState());

// Подписываемся на изменения состояния и сохраняем их в localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
