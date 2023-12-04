// actions.js
export const increment = (id) => ({
    type: 'INCREMENT',
    payload: id,
  });
  
  export const decrement = (id) => ({
    type: 'DECREMENT',
    payload: id,
  });
  
  export const remove = (id) => ({
    type: 'REMOVE',
    payload: id,
  });
  
  export const add = (title) => ({
    type: 'ADD',
    payload: title,
  });
  
  export const addNew = (title) => ({
    type: 'ADD_NEW',
    payload: title,
  });
  