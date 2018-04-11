import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk))(
  createStore
);

const Boiler = props => (
  <div>
    <Provider store={createStoreWithMiddleware(reducers, props.seedState)}>
      <App />
    </Provider>
  </div>
);

export default Boiler;
