export const NEW_SECTION = 'NEW_SECTION';
export function newSection() {
	return {
		type: NEW_SECTION,
	};
}

export const DELETE_SECTION = 'DELETE_SECTION';
export function deleteSection(sectionIndex) {
	return {
		type: DELETE_SECTION,
		payload: {
			sectionIndex,
		},
	};
}

export const REORDER_SECTION = 'REORDER_SECTION';
export function reorderSection(oldSectionIndex, newSectionIndex) {
	return {
		type: REORDER_SECTION,
		payload: {
			oldSectionIndex,
			newSectionIndex,
		},
	};
}
