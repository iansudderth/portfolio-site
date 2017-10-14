export const NEW_STEP = 'NEW_STEP';
export function newStep(sectionIndex) {
	return {
		type: NEW_STEP,
		payload: {
			sectionIndex,
		},
	};
}

export const EDIT_STEP = 'EDIT_STEP';
export function editStep(sectionIndex, stepIndex, newText) {
	return {
		type: EDIT_STEP,
		payload: {
			sectionIndex,
			stepIndex,
			newText,
		},
	};
}

export const DELETE_STEP = 'DELETE_STEP';
export function deleteStep(sectionIndex, stepIndex) {
	return {
		type: DELETE_STEP,
		payload: {
			sectionIndex,
			stepIndex,
		},
	};
}

export const REORDER_STEP = 'REORDER_STEP';
export function reorderStep(sectionIndex, oldStepIndex, newStepIndex) {
	return {
		type: REORDER_STEP,
		payload: {
			sectionIndex,
			oldStepIndex,
			newStepIndex,
		},
	};
}
