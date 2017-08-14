import { UPDATE_PROGRESS, UPDATE_SUCCESS, UPDATE_ERROR } from "../actions";

export default function network(state = "success", action) {
	switch (action.type) {
		case UPDATE_ERROR:
			return "error";

		case UPDATE_SUCCESS:
			return "success";

		case UPDATE_PROGRESS:
			return "progress";

		default:
			return state;
	}
}
