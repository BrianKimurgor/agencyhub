// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Auth from './components/authComponent';
import Register from './components/registerComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="relative flex min-h-screen flex-col bg-[#F8F9FB]">
        <Auth />
        <Register />
      </div>
    </Provider>
  );
}

export default App;
