import { CHANGE_BASE } from "../actions/";

function baseItem(state = "root", action) {
	switch (action.type) {
		case CHANGE_BASE:
			return action.payload;
		default:
			return state;
	}
}

export default baseItem;
