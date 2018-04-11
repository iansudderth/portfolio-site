import axios from 'axios';

import {
  CHANGE_RECIPE,
  changeRecipe,
  CHANGE_SCALING_FACTOR,
  changeScalingFactor,
  NEW_RECIPE,
  newRecipe,
  EDIT_RECIPE,
  editRecipe,
  NEW_RECIPE_FROM_COPY,
  newRecipeFromCopy,
} from './recipeActions';

export {
  CHANGE_RECIPE,
  changeRecipe,
  CHANGE_SCALING_FACTOR,
  changeScalingFactor,
  NEW_RECIPE,
  newRecipe,
  EDIT_RECIPE,
  editRecipe,
  NEW_RECIPE_FROM_COPY,
  newRecipeFromCopy,
};

import {
  RECIPE_REQUEST_PROGRESS,
  RECIPE_REQUEST_SUCCESS,
  RECIPE_REQUEST_ERROR,
  requestRecipe,
  UPDATE_RECIPE_LIST_PROGRESS,
  UPDATE_RECIPE_LIST_SUCCESS,
  UPDATE_RECIPE_LIST_ERROR,
  UPDATE_RECIPE_LIST,
  REQUEST_UPDATE_RECIPE_LIST,
  requestUpdateRecipeList,
  PUBLISH_RECIPE,
  PUBLISH_RECIPE_ERROR,
  PUBLISH_RECIPE_PROGRESS,
  PUBLISH_RECIPE_SUCCESS,
  publishRecipe,
} from './networkActions';

export {
  RECIPE_REQUEST_PROGRESS,
  RECIPE_REQUEST_SUCCESS,
  RECIPE_REQUEST_ERROR,
  requestRecipe,
  UPDATE_RECIPE_LIST_PROGRESS,
  UPDATE_RECIPE_LIST_SUCCESS,
  UPDATE_RECIPE_LIST_ERROR,
  UPDATE_RECIPE_LIST,
  REQUEST_UPDATE_RECIPE_LIST,
  requestUpdateRecipeList,
  PUBLISH_RECIPE,
  PUBLISH_RECIPE_ERROR,
  PUBLISH_RECIPE_PROGRESS,
  PUBLISH_RECIPE_SUCCESS,
  publishRecipe,
};

import {
  EDIT_TITLE,
  editTitle,
  EDIT_SERVING_AMOUNT,
  editServingAmount,
  EDIT_SERVING_UNIT,
  editServingUnit,
} from './editHeaderActions';

export {
  EDIT_TITLE,
  editTitle,
  EDIT_SERVING_AMOUNT,
  editServingAmount,
  EDIT_SERVING_UNIT,
  editServingUnit,
};

import {
  NEW_SECTION,
  newSection,
  DELETE_SECTION,
  deleteSection,
  REORDER_SECTION,
  reorderSection,
} from './editSectionActions';

export {
  NEW_SECTION,
  newSection,
  DELETE_SECTION,
  deleteSection,
  REORDER_SECTION,
  reorderSection,
};

import {
  NEW_INGREDIENT,
  newIngredient,
  EDIT_INGREDIENT_NAME,
  editIngredientName,
  EDIT_INGREDIENT_AMOUNT,
  editIngredientAmount,
  EDIT_INGREDIENT_UNIT,
  editIngredientUnit,
  REORDER_INGREDIENT,
  reorderIngredient,
  DELETE_INGREDIENT,
  deleteIngredient,
} from './editIngredientAction';

export {
  NEW_INGREDIENT,
  newIngredient,
  EDIT_INGREDIENT_NAME,
  editIngredientName,
  EDIT_INGREDIENT_AMOUNT,
  editIngredientAmount,
  EDIT_INGREDIENT_UNIT,
  editIngredientUnit,
  REORDER_INGREDIENT,
  reorderIngredient,
  DELETE_INGREDIENT,
  deleteIngredient,
};

import {
  NEW_STEP,
  newStep,
  EDIT_STEP,
  editStep,
  DELETE_STEP,
  deleteStep,
  REORDER_STEP,
  reorderStep,
} from './editStepActions';

export {
  NEW_STEP,
  newStep,
  EDIT_STEP,
  editStep,
  DELETE_STEP,
  deleteStep,
  REORDER_STEP,
  reorderStep,
};

import {
  // do not call these directly
  // for reducer ingestion only
  DELETE_DIALOG_OPEN,
  deleteDialogOpen,
  DELETE_DIALOG_CLOSE,
  deleteDialogClose,
  DELETE_STATUS_INITIAL,
  deleteStatusInitial,
  DELETE_STATUS_PROGRESS,
  deleteStatusProgress,
  DELETE_STATUS_SUCCESS,
  deleteStatusSuccess,
  DELETE_STATUS_ERROR,
  deleteStatusError,
  DELETE_STATUS_NEED_PASSWORD,
  deleteStatusNeedPassword,
  DELETE_STATUS_PASSWORD_CORRECT,
  deleteStatusPasswordCorrect,
  DELETE_STATUS_PASSWORD_INCORRECT,
  deleteStatusPasswordIncorrect,
  DELETE_STATUS_NO_PASSWORD,
  deleteStatusNoPassword,
  DELETE_STATUS_PASSWORD_ERROR,
  deleteStatusPasswordError,
  // call these directly
  // dispatchers to call from app
  openDeleteDialog,
  closeDeleteDialog,
  deleteRecipe,
  deleteRecipeWithPassword,
} from './deleteRecipeActions';

export {
  // do not call these directly
  // for reducer ingestion only
  DELETE_DIALOG_OPEN,
  deleteDialogOpen,
  DELETE_DIALOG_CLOSE,
  deleteDialogClose,
  DELETE_STATUS_INITIAL,
  deleteStatusInitial,
  DELETE_STATUS_PROGRESS,
  deleteStatusProgress,
  DELETE_STATUS_SUCCESS,
  deleteStatusSuccess,
  DELETE_STATUS_ERROR,
  deleteStatusError,
  DELETE_STATUS_NEED_PASSWORD,
  deleteStatusNeedPassword,
  DELETE_STATUS_PASSWORD_CORRECT,
  deleteStatusPasswordCorrect,
  DELETE_STATUS_PASSWORD_INCORRECT,
  deleteStatusPasswordIncorrect,
  DELETE_STATUS_NO_PASSWORD,
  deleteStatusNoPassword,
  DELETE_STATUS_PASSWORD_ERROR,
  deleteStatusPasswordError,
  // call these directly
  // dispatchers to call from app
  openDeleteDialog,
  closeDeleteDialog,
  deleteRecipe,
  deleteRecipeWithPassword,
};

import {
  // do not call directly
  // for reducer ingestion only
  DISCARD_DIALOG_OPEN,
  discardDialogOpen,
  DISCARD_DIALOG_CLOSE,
  discardDialogClose,
  DISCARD_STATUS_INITIAL,
  discardStatusInitial,
  DISCARD_STATUS_LOGOUT_PROGRESS,
  discardStatusLogOutProgress,
  DISCARD_STATUS_LOGOUT_SUCCESS,
  discardStatusLogOutSuccess,
  DISCARD_STATUS_LOGOUT_ERROR,
  discardStatusLogOutError,
  // Call these directly from app
  openDiscardChangesDialog,
  closeDiscardChangesDialog,
  discardChanges,
} from './discardChangesActions';

export {
  // do not call directly
  // for reducer ingestion only
  DISCARD_DIALOG_OPEN,
  discardDialogOpen,
  DISCARD_DIALOG_CLOSE,
  discardDialogClose,
  DISCARD_STATUS_INITIAL,
  discardStatusInitial,
  DISCARD_STATUS_LOGOUT_PROGRESS,
  discardStatusLogOutProgress,
  DISCARD_STATUS_LOGOUT_SUCCESS,
  discardStatusLogOutSuccess,
  DISCARD_STATUS_LOGOUT_ERROR,
  discardStatusLogOutError,
  // Call these directly from app
  openDiscardChangesDialog,
  closeDiscardChangesDialog,
  discardChanges,
};

import {
  // Do not call directly
  // for reducer ingestion only
  EDIT_AUTH_DIALOG_OPEN,
  editAuthDialogOpen,
  EDIT_AUTH_DIALOG_CLOSE,
  editAuthDialogClose,
  EDIT_AUTH_STATUS_INITIAL,
  editAuthStatusInitial,
  EDIT_AUTH_STATUS_PROGRESS,
  editAuthStatusProgress,
  EDIT_AUTH_STATUS_SUCCESS,
  editAuthStatusSuccess,
  EDIT_AUTH_STATUS_ERROR,
  editAuthStatusError,
  EDIT_AUTH_STATUS_INCORRECT_PASSWORD,
  editAuthStatusIncorrectPassword,
  EDIT_AUTH_STATUS_NO_PASSWORD,
  editAuthStatusNoPassword,
  // Call these directly from app
  openEditAuthDialog,
  closeEditAuthDialog,
  editAuth,
} from './editAuthActions';

export {
  // Do not call directly
  // for reducer ingestion only
  EDIT_AUTH_DIALOG_OPEN,
  editAuthDialogOpen,
  EDIT_AUTH_DIALOG_CLOSE,
  editAuthDialogClose,
  EDIT_AUTH_STATUS_INITIAL,
  editAuthStatusInitial,
  EDIT_AUTH_STATUS_PROGRESS,
  editAuthStatusProgress,
  EDIT_AUTH_STATUS_SUCCESS,
  editAuthStatusSuccess,
  EDIT_AUTH_STATUS_ERROR,
  editAuthStatusError,
  EDIT_AUTH_STATUS_INCORRECT_PASSWORD,
  editAuthStatusIncorrectPassword,
  EDIT_AUTH_STATUS_NO_PASSWORD,
  editAuthStatusNoPassword,
  // Call these directly from app
  openEditAuthDialog,
  closeEditAuthDialog,
  editAuth,
};

import {
  // Do not call directly
  // for reducer ingestion only
  SAVE_DIALOG_OPEN,
  saveDialogOpen,
  SAVE_DIALOG_CLOSE,
  saveDialogClose,
  SAVE_STATUS_INITIAL,
  saveStatusInitial,
  SAVE_STATUS_PROGRESS,
  saveStatusProgress,
  SAVE_STATUS_SUCCESS,
  saveStatusSuccess,
  SAVE_STATUS_ERROR,
  saveStatusError,
  // Call these directly from app
  openSaveDialog,
  closeSaveDialog,
  saveNewRecipe,
} from './saveRecipeActions';

export {
  // Do not call directly
  // for reducer ingestion only
  SAVE_DIALOG_OPEN,
  saveDialogOpen,
  SAVE_DIALOG_CLOSE,
  saveDialogClose,
  SAVE_STATUS_INITIAL,
  saveStatusInitial,
  SAVE_STATUS_PROGRESS,
  saveStatusProgress,
  SAVE_STATUS_SUCCESS,
  saveStatusSuccess,
  SAVE_STATUS_ERROR,
  saveStatusError,
  // Call these directly from app
  openSaveDialog,
  closeSaveDialog,
  saveNewRecipe,
};

import {
  // Do not call directly
  // for reducer ingestion only
  UPDATE_DIALOG_OPEN,
  updateDialogOpen,
  UPDATE_DIALOG_CLOSE,
  updateDialogClose,
  UPDATE_STATUS_INITIAL,
  updateStatusInitial,
  UPDATE_STATUS_PROGRESS,
  updateStatusProgress,
  UPDATE_STATUS_SUCCESS,
  updateStatusSuccess,
  UPDATE_STATUS_NEED_PASSWORD,
  updateStatusNeedPassword,
  UPDATE_STATUS_PASSWORD_PROGRESS,
  updateStatusPasswordProgress,
  UPDATE_STATUS_INCORRECT_PASSWORD,
  updateStatusIncorrectPassword,
  UPDATE_STATUS_PASSWORD_ERROR,
  updateStatusPasswordError,
  UPDATE_STATUS_ERROR,
  updateStatusError,
  // Call these directly from app
  openUpdateDialog,
  closeUpdateDialog,
  updateRecipe,
  updateRecipeWithPassword,
} from './updateRecipeActions';

export {
  // Do not call directly
  // for reducer ingestion only
  UPDATE_DIALOG_OPEN,
  updateDialogOpen,
  UPDATE_DIALOG_CLOSE,
  updateDialogClose,
  UPDATE_STATUS_INITIAL,
  updateStatusInitial,
  UPDATE_STATUS_PROGRESS,
  updateStatusProgress,
  UPDATE_STATUS_SUCCESS,
  updateStatusSuccess,
  UPDATE_STATUS_NEED_PASSWORD,
  updateStatusNeedPassword,
  UPDATE_STATUS_PASSWORD_PROGRESS,
  updateStatusPasswordProgress,
  UPDATE_STATUS_INCORRECT_PASSWORD,
  updateStatusIncorrectPassword,
  UPDATE_STATUS_PASSWORD_ERROR,
  updateStatusPasswordError,
  UPDATE_STATUS_ERROR,
  updateStatusError,
  // Call these directly from app
  openUpdateDialog,
  closeUpdateDialog,
  updateRecipe,
  updateRecipeWithPassword,
};

import { RESET, reset } from './resetActions';
export { RESET, reset };
