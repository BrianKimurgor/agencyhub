// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <h1>hello</h1>
    </Provider>
  );
}

export default App;
