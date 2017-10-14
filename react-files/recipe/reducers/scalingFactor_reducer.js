import { CHANGE_SCALING_FACTOR, CHANGE_RECIPE, RESET } from '../actions/index';

function scalingFactor(state = 1, action) {
  switch (action.type) {
    case CHANGE_SCALING_FACTOR:
      return action.payload;
    case CHANGE_RECIPE:
      return 1;
    case RESET:
      return 1;
    default:
      return state;
  }
}

export default scalingFactor;
