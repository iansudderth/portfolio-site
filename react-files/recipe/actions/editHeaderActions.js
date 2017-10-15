export const EDIT_TITLE = 'EDIT_TITLE';
export const editTitle = newTitle => ({
  type: EDIT_TITLE,
  payload: { newTitle },
});

export const EDIT_SERVING_AMOUNT = 'EDIT_SERVING_AMOUNT';
export const editServingAmount = newAmount => ({
  type: EDIT_SERVING_AMOUNT,
  payload: { newAmount },
});

export const EDIT_SERVING_UNIT = 'EDIT_SERVING_UNIT';
export const editServingUnit = newUnit => ({
  type: EDIT_SERVING_UNIT,
  payload: { newUnit },
});
