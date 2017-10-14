import { combineReducers } from 'redux';
import scalingFactor from './scalingFactor_reducer';
import recipe from './recipe_reducer';
import recipeList from './recipeList_reducer';
import editMode from './editMode_reducer';
import deleteDialog from './dialogReducers/deleteDialog_reducer';
import discardChangesDialog from './dialogReducers/discardChangesDialog_reducer';
import editAuthDialog from './dialogReducers/editAutDialog_reducer';
import saveDialog from './dialogReducers/saveDialog_reducer';
import updateDialog from './dialogReducers/updateDialog_reducer';

const rootReducer = combineReducers({
  scalingFactor,
  recipe,
  recipeList,
  editMode,
  deleteDialog,
  discardChangesDialog,
  editAuthDialog,
  saveDialog,
  updateDialog,
});

export default rootReducer;
