import _ from 'lodash';
import { NEW_SECTION, DELETE_SECTION, REORDER_SECTION } from '../../actions';

export default function editSectionReducer(state, action) {
  switch (action.type) {
    case NEW_SECTION: {
      let newState = _.merge({}, state);
      let newSection = {
        key: _.random(0, 65536),
        ingredients: [
          {
            name: 'Ingredient Name',
            amount: 1,
            unit: 'g',
            key: _.random(0, 65536),
          },
        ],
        procedure: [
          { content: 'Do something with something', key: _.random(0, 65536) },
        ],
      };
      newState.recipe = [...newState.recipe, newSection];
      return newState;
    }
    case DELETE_SECTION: {
      const { sectionIndex } = action.payload;
      let newState = _.merge({}, state);
      let newRecipe = [...newState.recipe];
      _.pullAt(newRecipe, sectionIndex);
      newState.recipe = newRecipe;
      return newState;
    }
    default:
      return state;
  }
}
