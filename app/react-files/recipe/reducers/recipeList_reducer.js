import { UPDATE_RECIPE_LIST } from '../actions';

function recipeList(state = [], action) {
  switch (action.type) {
    case UPDATE_RECIPE_LIST:
      return action.payload;
    default:
      return state;
  }
}

export default recipeList;
