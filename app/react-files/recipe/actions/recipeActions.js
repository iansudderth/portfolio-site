export const CHANGE_RECIPE = 'CHANGE_RECIPE';
export const changeRecipe = recipe => ({
  type: CHANGE_RECIPE,
  payload: recipe,
});

export const CHANGE_SCALING_FACTOR = 'CHANGE_SCALING_FACTOR';
export const changeScalingFactor = newScalingFactor => ({
  type: CHANGE_SCALING_FACTOR,
  payload: newScalingFactor,
});

export const NEW_RECIPE = 'NEW_RECIPE';
export const newRecipe = () => ({ type: NEW_RECIPE });

export const EDIT_RECIPE = 'EDIT_RECIPE';
export const editRecipe = id => ({
  type: EDIT_RECIPE,
  payload: { id },
});

export const NEW_RECIPE_FROM_COPY = 'NEW_RECIPE_FROM_COPY';
export function newRecipeFromCopy(recipeToCopy) {
  return {
    type: NEW_RECIPE_FROM_COPY,
    payload: { recipeToCopy },
  };
}
