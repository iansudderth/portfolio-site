export const NEW_INGREDIENT = 'NEW_INGREDIENT';
export const newIngredient = sectionIndex => ({
  type: NEW_INGREDIENT,
  payload: { sectionIndex },
});

export const EDIT_INGREDIENT_NAME = 'EDIT_INGREDIENT_NAME';
export const editIngredientName = (sectionIndex, ingredientIndex, newName) => ({
  type: EDIT_INGREDIENT_NAME,
  payload: {
    sectionIndex,
    ingredientIndex,
    newName,
  },
});

export const EDIT_INGREDIENT_AMOUNT = 'EDIT_INGREDIENT_AMOUNT';
export const editIngredientAmount = (
  sectionIndex,
  ingredientIndex,
  newAmount,
) => ({
  type: EDIT_INGREDIENT_AMOUNT,
  payload: {
    sectionIndex,
    ingredientIndex,
    newAmount,
  },
});

export const EDIT_INGREDIENT_UNIT = 'EDIT_INGREDIENT_UNIT';
export const editIngredientUnit = (sectionIndex, ingredientIndex, newUnit) => ({
  type: EDIT_INGREDIENT_UNIT,
  payload: {
    sectionIndex,
    ingredientIndex,
    newUnit,
  },
});

export const REORDER_INGREDIENT = 'REORDER_INGREDIENT';
export const reorderIngredient = (
  sectionIndex,
  oldIngredientIndex,
  newIngredientIndex,
) => ({
  type: REORDER_INGREDIENT,
  payload: {
    sectionIndex,
    oldIngredientIndex,
    newIngredientIndex,
  },
});

export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const deleteIngredient = (sectionIndex, ingredientIndex) => ({
  type: DELETE_INGREDIENT,
  payload: {
    sectionIndex,
    ingredientIndex,
  },
});
