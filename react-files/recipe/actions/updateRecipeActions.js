import axios from 'axios';
import _ from 'lodash';
import { enforceDelay } from './actionHelperFunctions';
import { delayTime } from '../config';

// Actions for opening and closing UpdateDialog
// These are not to be called directly, only via thunks

export const UPDATE_DIALOG_OPEN = 'UPDATE_DIALOG_OPEN';
export const updateDialogOpen = () => ({ type: UPDATE_DIALOG_OPEN });

export const UPDATE_DIALOG_CLOSE = 'UPDATE_DIALOG_CLOSE';
export const updateDialogClose = () => ({ type: UPDATE_DIALOG_CLOSE });

// Actions for updating the status of the update
// These are not to be called directly, only via thunks
// Valid values are:
// INITIAL, PROGRESS, SUCCESS, NEED_PASSWORD, PASSWORD_PROGRESS, INCORRECT_PASSWORD, PASSWORD_ERROR, ERROR

export const UPDATE_STATUS_INITIAL = 'UPDATE_STATUS_INITIAL';
export const updateStatusInitial = () => ({ type: UPDATE_STATUS_INITIAL });

export const UPDATE_STATUS_PROGRESS = 'UPDATE_STATUS_PROGRESS';
export const updateStatusProgress = () => ({ type: UPDATE_STATUS_PROGRESS });

export const UPDATE_STATUS_SUCCESS = 'UPDATE_STATUS_SUCCESS';
export const updateStatusSuccess = () => ({ type: UPDATE_STATUS_SUCCESS });

export const UPDATE_STATUS_NEED_PASSWORD = 'UPDATE_STATUS_NEED_PASSWORD';
export const updateStatusNeedPassword = () => ({
  type: UPDATE_STATUS_NEED_PASSWORD,
});

export const UPDATE_STATUS_PASSWORD_PROGRESS =
  'UPDATE_STATUS_PASSWORD_PROGRESS';
export const updateStatusPasswordProgress = () => ({
  type: UPDATE_STATUS_PASSWORD_PROGRESS,
});

export const UPDATE_STATUS_INCORRECT_PASSWORD =
  'UPDATE_STATUS_INCORRECT_PASSWORD';
export const updateStatusIncorrectPassword = () => ({
  type: UPDATE_STATUS_INCORRECT_PASSWORD,
});

export const UPDATE_STATUS_PASSWORD_ERROR = 'UPDATE_STATUS_PASSWORD_ERROR';
export const updateStatusPasswordError = () => ({
  type: UPDATE_STATUS_PASSWORD_ERROR,
});

export const UPDATE_STATUS_ERROR = 'UPDATE_STATUS_ERROR';
export const updateStatusError = () => ({
  type: UPDATE_STATUS_ERROR,
});

// Dispatchers for opening and closing UpdateDialog
// Call these directly

export const openUpdateDialog = () => dispatch => {
  dispatch(updateStatusInitial());
  dispatch(updateDialogOpen());
};

export const closeUpdateDialog = () => dispatch => {
  dispatch(updateDialogClose());
};

// Dispatcher for updating recipe to database
// Call This directly

export const updateRecipe = (recipeId, recipe) => dispatch => {
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

// Dispatcher for updating recipe when password needs to be re-entered
// Call this directly

export const updateRecipeWithPassword = (
  recipeId,
  recipe,
  password,
) => dispatch => {
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
