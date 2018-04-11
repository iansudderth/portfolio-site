import _ from 'lodash';
import {
  NEW_INGREDIENT,
  DELETE_INGREDIENT,
  EDIT_INGREDIENT_NAME,
  EDIT_INGREDIENT_AMOUNT,
  EDIT_INGREDIENT_UNIT,
  REORDER_INGREDIENT,
} from '../../actions';

export default function editIngredientReducer(state, action) {
  switch (action.type) {
    case NEW_INGREDIENT: {
      const { sectionIndex } = action.payload;
      let newState = _.merge({}, state);
      newState.recipe[sectionIndex].ingredients = [
        ...newState.recipe[sectionIndex].ingredients,
        {
          name: 'New Ingredient',
          amount: 1,
          unit: 'g',
          key: _.random(0, 65536),
        },
      ];
      return newState;
    }
    case DELETE_INGREDIENT: {
      const { sectionIndex, ingredientIndex } = action.payload;
      let newState = _.merge({}, state);
      let sectionIngredients = newState.recipe[sectionIndex].ingredients;
      _.pullAt(sectionIngredients, ingredientIndex);
      newState.recipe[sectionIndex].ingredients = [...sectionIngredients];
      return newState;
    }
    case EDIT_INGREDIENT_NAME: {
      const { sectionIndex, ingredientIndex, newName } = action.payload;
      let newIngredient =
        state.recipe[sectionIndex].ingredients[ingredientIndex];
      newIngredient = _.merge({}, newIngredient, { name: newName });
      let newState = _.merge({}, state);
      newState.recipe[sectionIndex].ingredients[
        ingredientIndex
      ] = newIngredient;
      return newState;
    }
    case EDIT_INGREDIENT_AMOUNT: {
      let { sectionIndex, ingredientIndex, newAmount } = action.payload;
      if (typeof newAmount === 'string') {
        newAmount = parseFloat(newAmount);
      }
      let newIngredient =
        state.recipe[sectionIndex].ingredients[ingredientIndex];
      newIngredient = _.merge({}, newIngredient, { amount: newAmount });
      let newState = _.merge({}, state);
      newState.recipe[sectionIndex].ingredients[
        ingredientIndex
      ] = newIngredient;
      return newState;
    }
    case EDIT_INGREDIENT_UNIT: {
      const { sectionIndex, ingredientIndex, newUnit } = action.payload;
      let newIngredient =
        state.recipe[sectionIndex].ingredients[ingredientIndex];
      newIngredient = _.merge({}, newIngredient, { unit: newUnit });
      let newState = _.merge({}, state);
      newState.recipe[sectionIndex].ingredients[
        ingredientIndex
      ] = newIngredient;
      return newState;
    }
    default:
      return state;
  }
}
