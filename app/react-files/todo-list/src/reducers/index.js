import { combineReducers } from 'redux';
import items from './items_reducer';
import baseItem from './baseItem_reducer';
import network from './network_reducer';

const rootReducer = combineReducers({
  items,
  baseItem,
  network,
});

export default rootReducer;
