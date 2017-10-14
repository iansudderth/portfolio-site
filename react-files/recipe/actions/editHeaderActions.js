export const EDIT_TITLE = 'EDIT_TITLE';
export function editTitle(newTitle) {
	return {
		type: EDIT_TITLE,
		payload: {
			newTitle,
		},
	};
}

export const EDIT_SERVING_AMOUNT = 'EDIT_SERVING_AMOUNT';
export function editServingAmount(newAmount) {
	return {
		type: EDIT_SERVING_AMOUNT,
		payload: {
			newAmount,
		},
	};
}

export const EDIT_SERVING_UNIT = 'EDIT_SERVING_UNIT';
export function editServingUnit(newUnit) {
	return {
		type: EDIT_SERVING_UNIT,
		payload: {
			newUnit,
		},
	};
}
