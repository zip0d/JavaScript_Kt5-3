// App.js
import React from 'react';
import { Provider } from 'react-redux';
import Cart from './components/Cart';
import store from './components/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
