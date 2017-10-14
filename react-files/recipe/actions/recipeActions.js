export const CHANGE_RECIPE = 'CHANGE_RECIPE';
export function changeRecipe(recipe) {
  return {
    type: CHANGE_RECIPE,
    payload: recipe,
  };
}

export const CHANGE_SCALING_FACTOR = 'CHANGE_SCALING_FACTOR';
export function changeScalingFactor(newScalingFactor) {
  return {
    type: CHANGE_SCALING_FACTOR,
    payload: newScalingFactor,
  };
}

export const NEW_RECIPE = 'NEW_RECIPE';
export function newRecipe() {
  return {
    type: NEW_RECIPE,
  };
}

export const EDIT_RECIPE = 'EDIT_RECIPE';
export function editRecipe(id) {
  return {
    type: EDIT_RECIPE,
    payload: {
      id,
    },
  };
}

export const NEW_RECIPE_FROM_COPY = 'NEW_RECIPE_FROM_COPY';
export function newRecipeFromCopy(recipeToCopy) {
  return {
    type: NEW_RECIPE_FROM_COPY,
    payload: {
      recipeToCopy,
    },
  };
}
