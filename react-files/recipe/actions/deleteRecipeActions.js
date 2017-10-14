import _ from 'lodash';
import axios from 'axios';
import { enforceDelay } from './actionHelperFunctions';

// Action dispatchers for opening and closing DeleteDialog
// Not to be called directly, only through thunks

export const DELETE_DIALOG_OPEN = 'DELETE_DIALOG_OPEN';
export function deleteDialogOpen() {
  return {
    type: DELETE_DIALOG_OPEN,
  };
}

export const DELETE_DIALOG_CLOSE = 'DELETE_DIALOG_CLOSE';
export function deleteDialogClose() {
  return {
    type: DELETE_DIALOG_CLOSE,
  };
}

// Action dispatchers for deleteRecipeStatus
// Not to be called directly, only via thunks
// Valid values: INITIAL, PROGRESS, SUCCESS, ERROR, NEED_PASSWORD, PASSWORD_CORRECT, PASSWORD_INCORRECT, NO_PASSWORD, PASSWORD_ERROR

export const DELETE_STATUS_INITIAL = 'DELETE_STATUS_INITIAL';
export function deleteStatusInitial() {
  return {
    type: DELETE_STATUS_INITIAL,
  };
}

export const DELETE_STATUS_PROGRESS = 'DELETE_STATUS_PROGRESS';
export function deleteStatusProgress() {
  return {
    type: DELETE_STATUS_PROGRESS,
  };
}

export const DELETE_STATUS_SUCCESS = 'DELETE_STATUS_SUCCESS';
export function deleteStatusSuccess() {
  return {
    type: DELETE_STATUS_SUCCESS,
  };
}

export const DELETE_STATUS_ERROR = 'DELETE_STATUS_ERROR';
export function deleteStatusError() {
  return {
    type: DELETE_STATUS_ERROR,
  };
}

export const DELETE_STATUS_NEED_PASSWORD = 'DELETE_STATUS_NEED_PASSWORD';
export function deleteStatusNeedPassword() {
  return {
    type: DELETE_STATUS_NEED_PASSWORD,
  };
}

export const DELETE_STATUS_PASSWORD_CORRECT = 'DELETE_STATUS_PASSWORD_CORRECT';
export function deleteStatusPasswordCorrect() {
  return {
    type: DELETE_STATUS_PASSWORD_CORRECT,
  };
}

export const DELETE_STATUS_PASSWORD_INCORRECT =
  'DELETE_STATUS_PASSWORD_INCORRECT';
export function deleteStatusPasswordIncorrect() {
  return {
    type: DELETE_STATUS_PASSWORD_INCORRECT,
  };
}

export const DELETE_STATUS_NO_PASSWORD = 'DELETE_STATUS_NO_PASSWORD';
export function deleteStatusNoPassword() {
  return {
    type: DELETE_STATUS_NO_PASSWORD,
  };
}

export const DELETE_STATUS_PASSWORD_ERROR = 'DELETE_STATUS_PASSWORD_ERROR';
export function deleteStatusPasswordError() {
  return {
    type: DELETE_STATUS_PASSWORD_ERROR,
  };
}

// Dispatchers for opening and closing the DeleteDialog modal
// Call these functions directly

export function openDeleteDialog() {
  return dispatch => {
    dispatch(deleteStatusInitial());
    dispatch(deleteDialogOpen());
  };
}

export function closeDeleteDialog() {
  return dispatch => {
    dispatch(deleteDialogClose());
  };
}

// Dispatcher for making api call to delete
// Call this directly
// !!!!! Server side not yet implemented

export function deleteRecipe(recipeId) {
  return dispatch => {
    const delayTime = 800;
    dispatch(deleteStatusProgress());
    const delayStart = new Date();
    axios
      .delete(`/recipe/delete/${recipeId}`)
      .then(response => {
        console.log(response);
        enforceDelay(delayStart, delayTime, () => {
          if (response.data.status === 'SUCCESS') {
            dispatch(deleteStatusSuccess());
            _.delay(dispatch, 1000, closeDeleteDialog());
          } else if (response.data.authStatus === 'NOT LOGGED IN') {
            dispatch(deleteStatusNeedPassword());
          } else {
            dispatch(deleteStatusError());
          }
        });
      })
      .catch(error => {
        console.log(error);
        dispatch(deleteStatusError());
      });
  };
}

export function deleteRecipeWithPassword(recipeId, password) {
  return dispatch => {};
}
