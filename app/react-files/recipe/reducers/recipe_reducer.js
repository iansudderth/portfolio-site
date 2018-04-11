import _ from 'lodash';
import { removeIds } from './helper_functions';

import {
  CHANGE_RECIPE,
  NEW_RECIPE,
  EDIT_TITLE,
  EDIT_SERVING_AMOUNT,
  EDIT_SERVING_UNIT,
  NEW_SECTION,
  DELETE_SECTION,
  REORDER_SECTION,
  NEW_INGREDIENT,
  EDIT_INGREDIENT_NAME,
  EDIT_INGREDIENT_AMOUNT,
  EDIT_INGREDIENT_UNIT,
  REORDER_INGREDIENT,
  DELETE_INGREDIENT,
  NEW_STEP,
  EDIT_STEP,
  DELETE_STEP,
  REORDER_STEP,
  RESET,
  NEW_RECIPE_FROM_COPY,
  DELETE_STATUS_SUCCESS,
} from '../actions';

import defaultRecipe from '../recipes/deafaultRecipe';

import editHeaderReducer from './editModeReducers/editHeader';
import editSectionReducer from './editModeReducers/editSection';
import editIngredientReducer from './editModeReducers/editIngredient';
import editStepReducer from './editModeReducers/editStep';

function recipe(state = null, action) {
  switch (action.type) {
    case RESET:
      return null;
    case DELETE_STATUS_SUCCESS:
      return null;
    case CHANGE_RECIPE:
      switch (action.payload) {
        case null:
          return state;
        default:
          return action.payload;
      }
    case NEW_RECIPE: {
      return defaultRecipe;
    }
    case NEW_RECIPE_FROM_COPY: {
      const oldRecipe = _.merge({}, action.payload.recipeToCopy);
      const newRecipe = removeIds(oldRecipe);
      return newRecipe;
    }
    case EDIT_TITLE:
    case EDIT_SERVING_AMOUNT:
    case EDIT_SERVING_UNIT:
      return editHeaderReducer(state, action);
    case NEW_SECTION:
    case DELETE_SECTION:
    case REORDER_SECTION:
      return editSectionReducer(state, action);
    case NEW_INGREDIENT:
    case EDIT_INGREDIENT_NAME:
    case EDIT_INGREDIENT_AMOUNT:
    case EDIT_INGREDIENT_UNIT:
    case REORDER_INGREDIENT:
    case DELETE_INGREDIENT:
      return editIngredientReducer(state, action);
    case NEW_STEP:
    case EDIT_STEP:
    case DELETE_STEP:
    case REORDER_STEP:
      return editStepReducer(state, action);
    default:
      return state;
  }
}

export default recipe;
