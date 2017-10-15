import axios from 'axios';
// import _ from 'lodash';
import { requestRecipe } from './index';

// Action dispatchers for opening and closing DiscardChangesDialog
// Not to be called directly, only through thunks

export const DISCARD_DIALOG_OPEN = 'DISCARD_DIALOG_OPEN';
export const discardDialogOpen = () => ({ type: DISCARD_DIALOG_OPEN });

export const DISCARD_DIALOG_CLOSE = 'DISCARD_DIALOG_CLOSE';
export const discardDialogClose = () => ({ type: DISCARD_DIALOG_CLOSE });

// Action dispatchers for changing status
// Not to be called directly, only from thunks
// Valid options are INITIAL, LOG_OUT_PROGRESS, LOG_OUT_SUCCESS, LOG_OUT_ERROR

export const DISCARD_STATUS_INITIAL = 'DISCARD_STATUS_INITIAL';
export const discardStatusInitial = () => ({ type: DISCARD_STATUS_INITIAL });

export const DISCARD_STATUS_LOGOUT_PROGRESS = 'DISCARD_STATUS_LOG_OUT_PROGRESS';
export const discardStatusLogOutProgress = () => ({
  type: DISCARD_STATUS_LOGOUT_PROGRESS,
});

export const DISCARD_STATUS_LOGOUT_SUCCESS = 'DISCARD_STATUS_LOG_OUT_SUCCESS';
export const discardStatusLogOutSuccess = () => ({
  type: DISCARD_STATUS_LOGOUT_SUCCESS,
});

export const DISCARD_STATUS_LOGOUT_ERROR = 'DISCARD_STATUS_LOG_OUT_ERROR';
export const discardStatusLogOutError = () => ({
  type: DISCARD_STATUS_LOGOUT_ERROR,
});

// Dispatchers for opening and closing dialog
// Call these directly

export const openDiscardChangesDialog = () => dispatch => {
  dispatch(discardStatusInitial());
  dispatch(discardDialogOpen());
};

export const closeDiscardChangesDialog = () => dispatch => {
  dispatch(discardDialogClose());
};

// Dispatcher for discarding changes
// Call this directly

export const discardChanges = id => dispatch => {
  dispatch(requestRecipe(id));
  dispatch(discardDialogClose());
  dispatch(discardStatusLogOutProgress());
  dispatch(closeDiscardChangesDialog());
  axios
    .post('/recipe/auth/logout')
    .then(response => {
      dispatch(discardStatusLogOutSuccess());
    })
    .catch(error => {
      console.log(error);
      dispatch(discardStatusLogOutError());
    });
};
