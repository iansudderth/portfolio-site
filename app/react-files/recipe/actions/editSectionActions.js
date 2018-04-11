export const NEW_SECTION = 'NEW_SECTION';
export const newSection = () => ({ type: NEW_SECTION });

export const DELETE_SECTION = 'DELETE_SECTION';
export const deleteSection = sectionIndex => ({
  type: DELETE_SECTION,
  payload: { sectionIndex },
});

export const REORDER_SECTION = 'REORDER_SECTION';
export const reorderSection = (oldSectionIndex, newSectionIndex) => ({
  type: REORDER_SECTION,
  payload: { oldSectionIndex, newSectionIndex },
});
