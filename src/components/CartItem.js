// CartItem.js
import React from 'react';

const CartItem = ({ item, onIncrement, onDecrement, onRemove }) => {
  return (
    <div className="cart-item">
      <div>{item.title}</div>
      <div>
        <button onClick={() => onDecrement(item.id)}>-</button>
        <span>{item.count}</span>
        <button onClick={() => onIncrement(item.id)}>+</button>
      </div>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
