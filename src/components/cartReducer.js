// cartReducer.js
const defaultState = [
    { id: 1, title: 'Велосипед', count: 5 },
    { id: 2, title: 'Самокат', count: 4 },
    { id: 3, title: 'Гантели', count: 7 },
    { id: 4, title: 'Ракетки', count: 1 },
  ];
  
  const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state.map((item) =>
          item.id === action.payload
            ? { ...item, count: Math.min(item.count + 1, 25) }
            : item
        );
      case 'DECREMENT':
        return state.map((item) =>
          item.id === action.payload
            ? { ...item, count: Math.max(item.count - 1, 1) }
            : item
        );
      case 'REMOVE':
        return state.filter((item) => item.id !== action.payload);
      case 'ADD':
        return [
          ...state,
          { id: Date.now(), title: action.payload, count: 1 },
        ];
      default:
        return state;
    }
  };
  
  export default cartReducer;
  