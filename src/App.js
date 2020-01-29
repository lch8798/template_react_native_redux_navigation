import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux';
import Root from './navigators/Root';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
