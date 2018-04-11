import _ from 'lodash';
import {
	EDIT_TITLE,
	EDIT_SERVING_AMOUNT,
	EDIT_SERVING_UNIT,
} from '../../actions';

export default function editHeaderReducer(state, action) {
	let newState;
	switch (action.type) {
		case EDIT_TITLE:{
			const newTitle = action.payload.newTitle
			newState = _.merge({}, state, {
				title: newTitle
			})
			return newState;
		}
		case EDIT_SERVING_AMOUNT: {
			const newAmount = action.payload.newAmount;
			newState = _.merge({}, state, {
				serving: { amount: newAmount },
			});
			return newState;
		}
		case EDIT_SERVING_UNIT: {
			const newUnit = action.payload.newUnit;
			newState = _.merge({}, state, {
				serving: { unit: newUnit },
			});
			return newState;
		}
		default:
			return state;
	}
}
