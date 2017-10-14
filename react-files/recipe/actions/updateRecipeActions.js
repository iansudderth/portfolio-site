import axios from 'axios';
import _ from 'lodash';
import { enforceDelay } from './actionHelperFunctions';

// Actions for opening and closing UpdateDialog
// These are not to be called directly, only via thunks

export const UPDATE_DIALOG_OPEN = 'UPDATE_DIALOG_OPEN';
export function updateDialogOpen() {
  return {
    type: UPDATE_DIALOG_OPEN,
  };
}

export const UPDATE_DIALOG_CLOSE = 'UPDATE_DIALOG_CLOSE';
export function updateDialogClose() {
  return {
    type: UPDATE_DIALOG_CLOSE,
  };
}

// Actions for updating the status of the update
// These are not to be called directly, only via thunks
// Valid values are:
// INITIAL, PROGRESS, SUCCESS, NEED_PASSWORD, PASSWORD_PROGRESS, INCORRECT_PASSWORD, PASSWORD_ERROR, ERROR

export const UPDATE_STATUS_INITIAL = 'UPDATE_STATUS_INITIAL';
export function updateStatusInitial() {
  return {
    type: UPDATE_STATUS_INITIAL,
  };
}

export const UPDATE_STATUS_PROGRESS = 'UPDATE_STATUS_PROGRESS';
export function updateStatusProgress() {
  return {
    type: UPDATE_STATUS_PROGRESS,
  };
}

export const UPDATE_STATUS_SUCCESS = 'UPDATE_STATUS_SUCCESS';
export function updateStatusSuccess() {
  return {
    type: UPDATE_STATUS_SUCCESS,
  };
}

export const UPDATE_STATUS_NEED_PASSWORD = 'UPDATE_STATUS_NEED_PASSWORD';
export function updateStatusNeedPassword() {
  return {
    type: UPDATE_STATUS_NEED_PASSWORD,
  };
}

export const UPDATE_STATUS_PASSWORD_PROGRESS =
  'UPDATE_STATUS_PASSWORD_PROGRESS';
export function updateStatusPasswordProgress() {
  return {
    type: UPDATE_STATUS_PASSWORD_PROGRESS,
  };
}

export const UPDATE_STATUS_INCORRECT_PASSWORD =
  'UPDATE_STATUS_INCORRECT_PASSWORD';
export function updateStatusIncorrectPassword() {
  return {
    type: UPDATE_STATUS_INCORRECT_PASSWORD,
  };
}

export const UPDATE_STATUS_PASSWORD_ERROR = 'UPDATE_STATUS_PASSWORD_ERROR';
export function updateStatusPasswordError() {
  return {
    type: UPDATE_STATUS_PASSWORD_ERROR,
  };
}

export const UPDATE_STATUS_ERROR = 'UPDATE_STATUS_ERROR';
export function updateStatusError() {
  return {
    type: UPDATE_STATUS_ERROR,
  };
}

// Dispatchers for opening and closing UpdateDialog
// Call these directly

export function openUpdateDialog() {
  return dispatch => {
    dispatch(updateStatusInitial());
    dispatch(updateDialogOpen());
  };
}

export function closeUpdateDialog() {
  return dispatch => {
    dispatch(updateDialogClose());
  };
}

// Dispatcher for updating recipe to database
// Call This directly

export function updateRecipe(recipeId, recipe) {
  return dispatch => {
    const delayTime = 800;
    dispatch(updateStatusProgress());
    const delayStart = new Date();
    axios
      .post('/recipe/update', {
        recipeId,
        recipe,
      })
      .then(response => {
        console.log(response);
        enforceDelay(delayStart, delayTime, () => {
          if (response.data.status === 'SUCCESS') {
            dispatch(updateStatusSuccess());
            _.delay(dispatch, 1000, closeUpdateDialog());
          } else if (response.data.authStatus === 'NOT LOGGED IN') {
            dispatch(updateStatusNeedPassword());
          } else {
            switch (response.data.recipeStatus) {
              default: {
                dispatch(updateStatusError());
              }
            }
          }
        });
      })
      .catch(error => {
        dispatch(updateStatusError());
        console.log(error);
      });
  };
}

// Dispatcher for updating recipe when password needs to be re-entered
// Call this directly

export function updateRecipeWithPassword(recipeId, recipe, password) {
  return dispatch => {
    const delayTime = 800;
    dispatch(updateStatusPasswordProgress());
    const delayStart = new Date();
    axios
      .post('/recipe/auth/login', {
        id: recipeId,
        password,
      })
      .then(response => {
        console.log(response);
        enforceDelay(delayStart, delayTime, () => {
          if (response.data.status === 'ERROR') {
            dispatch(updateStatusPasswordError());
          } else if (response.data.authStatus === 'INCORRECT PASSWORD') {
            dispatch(updateStatusIncorrectPassword());
          } else if (response.data.authStatus === 'CORRECT PASSWORD') {
            updateRecipe(recipeId, recipe);
          } else {
            dispatch(updateStatusPasswordError());
          }
        });
      })
      .catch(error => {
        console.log(error);
        dispatch(updateStatusPasswordError());
      });
  };
}
