import { combineReducers } from "redux";
import items from "./items_reducer.js";
import baseItem from "./baseItem_reducer.js";
import network from "./network_reducer.js";

const rootReducer = combineReducers({
	items,
	baseItem,
	network
});

export default rootReducer;
