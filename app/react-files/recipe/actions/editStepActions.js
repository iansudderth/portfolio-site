export const NEW_STEP = 'NEW_STEP';
export const newStep = sectionIndex => ({
  type: NEW_STEP,
  payload: { sectionIndex },
});

export const EDIT_STEP = 'EDIT_STEP';
export const editStep = (sectionIndex, stepIndex, newText) => ({
  type: EDIT_STEP,
  payload: { sectionIndex, stepIndex, newText },
});

export const DELETE_STEP = 'DELETE_STEP';
export const deleteStep = (sectionIndex, stepIndex) => ({
  type: DELETE_STEP,
  payload: { sectionIndex, stepIndex },
});

export const REORDER_STEP = 'REORDER_STEP';
export const reorderStep = (sectionIndex, oldStepIndex, newStepIndex) => ({
  type: REORDER_STEP,
  payload: { sectionIndex, oldStepIndex, newStepIndex },
});
