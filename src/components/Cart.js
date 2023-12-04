// Cart.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, remove, add, addNew } from './actions';
import '../App.css';

const Cart = () => {
  const cart = useSelector((state) => state);
  const dispatch = useDispatch();
  const [newItemTitle, setNewItemTitle] = useState('');

  const handleAddNewItem = () => {
    const newItemTitle = prompt('Enter the name of the new item:');
    if (newItemTitle) {
      dispatch(addNew(newItemTitle));
    }
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.title} - {item.count}</span>
          <button onClick={() => dispatch(increment(item.id))}>+</button>
          <button onClick={() => dispatch(decrement(item.id))}>-</button>
          <button onClick={() => dispatch(remove(item.id))}>Remove</button>
        </div>
      ))}
      <div className="add-item-container">
        <input
          type="text"
          placeholder="New item"
          value={newItemTitle}
          onChange={(e) => setNewItemTitle(e.target.value)}
        />
        <button onClick={() => dispatch(add(newItemTitle))}>Add Item</button>
        <button onClick={handleAddNewItem}>Add New Item</button>
      </div>
    </div>
  );
};

export default Cart;
