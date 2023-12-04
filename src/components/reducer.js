// reducer.js
const defaultState = [
    { id: 1, title: 'Велосипед', count: 5 },
    { id: 2, title: 'Самокат', count: 4 },
    { id: 3, title: 'Гантели', count: 7 },
    { id: 4, title: 'Ракетки', count: 1 },
  ];
  
  const limitCount = (count) => Math.min(Math.max(count, 1), 25);
  
  const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        const incrementedState = state.map((item) =>
          item.id === action.payload
            ? { ...item, count: limitCount(item.count + 1) }
            : item
        );
        return incrementedState;
  
      case 'DECREMENT':
        const decrementedState = state.map((item) =>
          item.id === action.payload
            ? { ...item, count: limitCount(item.count - 1) }
            : item
        );
        return decrementedState;
  
      case 'REMOVE':
        const newState = state.filter((item) => item.id !== action.payload);
        return newState;
  
      case 'ADD':
        const newId =
          state.reduce((maxId, item) => Math.max(item.id, maxId), 0) + 1;
        const addedState = [
          ...state,
          { id: newId, title: action.payload, count: 1 },
        ];
        return addedState;
  
      case 'ADD_NEW':
        const newItemId =
          state.reduce((maxId, item) => Math.max(item.id, maxId), 0) + 1;
        const addedNewState = [
          ...state,
          { id: newItemId, title: action.payload, count: 1 },
        ];
        return addedNewState;
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  