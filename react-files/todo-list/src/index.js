import React from 'react';
// import ReactDOM from "react-dom";
// import registerServiceWorker from "./registerServiceWorker";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
import TodoContainer from './containers/TodoContainer';

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk))(
  createStore,
);

const Boiler = props =>
  (<Provider store={createStoreWithMiddleware(reducers, props.seedState)}>
    <TodoContainer listID={props.listID} />
  </Provider>);

// ReactDOM.render(<Boiler />, document.getElementById("root"));
// registerServiceWorker();

export default Boiler;
