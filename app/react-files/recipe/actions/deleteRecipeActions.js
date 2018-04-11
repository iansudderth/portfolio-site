import _ from 'lodash';
import axios from 'axios';
import { enforceDelay } from './actionHelperFunctions';
import config from '../config';

const { delayTime } = config;
// Action dispatchers for opening and closing DeleteDialog
// Not to be called directly, only through thunks

export const DELETE_DIALOG_OPEN = 'DELETE_DIALOG_OPEN';
export const deleteDialogOpen = () => ({ type: DELETE_DIALOG_OPEN });

export const DELETE_DIALOG_CLOSE = 'DELETE_DIALOG_CLOSE';
export const deleteDialogClose = () => ({ type: DELETE_DIALOG_CLOSE });

// Action dispatchers for deleteRecipeStatus
// Not to be called directly, only via thunks
// Valid values: INITIAL, PROGRESS, SUCCESS, ERROR, NEED_PASSWORD, PASSWORD_CORRECT, PASSWORD_INCORRECT, NO_PASSWORD, PASSWORD_ERROR

export const DELETE_STATUS_INITIAL = 'DELETE_STATUS_INITIAL';
export const deleteStatusInitial = () => ({ type: DELETE_STATUS_INITIAL });

export const DELETE_STATUS_PROGRESS = 'DELETE_STATUS_PROGRESS';
export const deleteStatusProgress = () => ({ type: DELETE_STATUS_PROGRESS });

export const DELETE_STATUS_SUCCESS = 'DELETE_STATUS_SUCCESS';
export const deleteStatusSuccess = () => ({ type: DELETE_STATUS_SUCCESS });

export const DELETE_STATUS_ERROR = 'DELETE_STATUS_ERROR';
export const deleteStatusError = () => ({ type: DELETE_STATUS_ERROR });

export const DELETE_STATUS_NEED_PASSWORD = 'DELETE_STATUS_NEED_PASSWORD';
export const deleteStatusNeedPassword = () => ({
  type: DELETE_STATUS_NEED_PASSWORD,
});

export const DELETE_STATUS_PASSWORD_CORRECT = 'DELETE_STATUS_PASSWORD_CORRECT';
export const deleteStatusPasswordCorrect = () => ({
  type: DELETE_STATUS_PASSWORD_CORRECT,
});

export const DELETE_STATUS_PASSWORD_INCORRECT =
  'DELETE_STATUS_PASSWORD_INCORRECT';
export const deleteStatusPasswordIncorrect = () => ({
  type: DELETE_STATUS_PASSWORD_INCORRECT,
});

export const DELETE_STATUS_PASSWORD_ERROR = 'DELETE_STATUS_PASSWORD_ERROR';
export const deleteStatusPasswordError = () => ({
  type: DELETE_STATUS_PASSWORD_ERROR,
});

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

export const deleteRecipe = recipeId => dispatch => {
  dispatch(deleteStatusProgress());
  const delayStart = new Date();
  axios
    .delete(`/recipe/delete/${recipeId}`)
    .then(response => {
      // console.log(response);
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

export const deleteRecipeWithPassword = (recipeId, password) => dispatch => {
  dispatch(deleteStatusProgress());
  const delayStart = new Date();

  axios
    .post('/recipe/auth/login', { id: recipeId, password })
    .then(response => {
      if (response.data.status === 'ERROR') {
        enforceDelay(delayStart, delayTime, () => {
          dispatch(deleteStatusPasswordError());
        });
      } else if (response.data.authStatus === 'INCORRECT PASSWORD') {
        enforceDelay(delayStart, delayTime, () => {
          dispatch(deleteStatusPasswordIncorrect());
        });
      } else if (response.data.authStatus === 'CORRECT PASSWORD') {
        dispatch(deleteRecipe());
      } else {
        enforceDelay(delayStart, delayTime, () => {
          dispatch(deleteStatusError());
        });
      }
    })
    .catch(error => {
      console.log(error);
      dispatch(deleteStatusError());
    });
};
