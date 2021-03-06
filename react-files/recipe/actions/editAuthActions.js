import axios from 'axios';
import _ from 'lodash';
import { enforceDelay } from './actionHelperFunctions';
import config from '../config';

const { delayTime } = config;
// Actions for opening and closing the dialog
// Not to be called directly, only from thunks

export const EDIT_AUTH_DIALOG_OPEN = 'EDIT_AUTH_DIALOG_OPEN';
export const editAuthDialogOpen = () => ({ type: EDIT_AUTH_DIALOG_OPEN });

export const EDIT_AUTH_DIALOG_CLOSE = 'EDIT_AUTH_DIALOG_CLOSE';
export const editAuthDialogClose = () => ({ type: EDIT_AUTH_DIALOG_CLOSE });

// Actions for  updating status
// Not to be called directly, only from thunks
// Valid values : INITIAL,PROGRESS, SUCCESS, ERROR, INCORRECT_PASSWORD, NO_PASSWORD

export const EDIT_AUTH_STATUS_INITIAL = 'EDIT_AUTH_STATUS_INITIAL';
export const editAuthStatusInitial = () => ({ type: EDIT_AUTH_STATUS_INITIAL });

export const EDIT_AUTH_STATUS_PROGRESS = 'EDIT_AUTH_STATUS_PROGRESS';
export const editAuthStatusProgress = () => ({
  type: EDIT_AUTH_STATUS_PROGRESS,
});

export const EDIT_AUTH_STATUS_SUCCESS = 'EDIT_AUTH_STATUS_SUCCESS';
export const editAuthStatusSuccess = () => ({ type: EDIT_AUTH_STATUS_SUCCESS });

export const EDIT_AUTH_STATUS_ERROR = 'EDIT_AUTH_STATUS_ERROR';
export const editAuthStatusError = () => ({ type: EDIT_AUTH_STATUS_ERROR });

export const EDIT_AUTH_STATUS_INCORRECT_PASSWORD =
  'EDIT_AUTH_STATUS_INCORRECT_PASSWORD';
export const editAuthStatusIncorrectPassword = () => ({
  type: EDIT_AUTH_STATUS_INCORRECT_PASSWORD,
});

export const EDIT_AUTH_STATUS_NO_PASSWORD = 'EDIT_AUTH_STATUS_NO_PASSWORD';
export const editAuthStatusNoPassword = () => ({
  type: EDIT_AUTH_STATUS_NO_PASSWORD,
});
// Dispatchers for opening and closing the dialog
// Call these directly

export const openEditAuthDialog = () => dispatch => {
  dispatch(editAuthDialogOpen());
  dispatch(editAuthStatusInitial());
};

export const closeEditAuthDialog = () => dispatch => {
  dispatch(editAuthDialogClose());
};

// Dispatcher for authenticating password
// Call this directly

export const editAuth = (recipeId, password) => dispatch => {
  dispatch(editAuthStatusProgress());
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
          if (response.data.authStatus === 'NO AUTH RECORD') {
            dispatch(editAuthStatusNoPassword());
          } else {
            dispatch(editAuthStatusError());
          }
        } else if (response.data.authStatus === 'INCORRECT PASSWORD') {
          dispatch(editAuthStatusIncorrectPassword());
        } else if (response.data.authStatus === 'CORRECT PASSWORD') {
          dispatch(editAuthStatusSuccess());
          _.delay(dispatch, 1000, closeEditAuthDialog());
        } else {
          dispatch(editAuthStatusError());
        }
      });
    })
    .catch(error => {
      console.log(error);
      dispatch(editAuthStatusError());
    });
};
