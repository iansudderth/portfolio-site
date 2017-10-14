import { stateChange } from '../helper_functions';

import {
  EDIT_AUTH_DIALOG_OPEN,
  EDIT_AUTH_DIALOG_CLOSE,
  EDIT_AUTH_STATUS_INITIAL,
  EDIT_AUTH_STATUS_PROGRESS,
  EDIT_AUTH_STATUS_SUCCESS,
  EDIT_AUTH_STATUS_ERROR,
  EDIT_AUTH_STATUS_INCORRECT_PASSWORD,
  EDIT_AUTH_STATUS_NO_PASSWORD,
  RESET,
} from '../../actions';

const initialState = {
  open: false,
  status: 'INITIAL',
};

export default function editAuthDialog(state = initialState, action) {
  switch (action.type) {
    case RESET:
      return initialState;
    case EDIT_AUTH_DIALOG_OPEN: {
      return stateChange(state, {
        open: true,
      });
    }
    case EDIT_AUTH_DIALOG_CLOSE: {
      return stateChange(state, {
        open: false,
      });
    }
    case EDIT_AUTH_STATUS_INITIAL: {
      return stateChange(state, {
        status: 'INITIAL',
      });
    }
    case EDIT_AUTH_STATUS_PROGRESS: {
      return stateChange(state, {
        status: 'PROGRESS',
      });
    }
    case EDIT_AUTH_STATUS_SUCCESS: {
      return stateChange(state, {
        status: 'SUCCESS',
      });
    }
    case EDIT_AUTH_STATUS_ERROR: {
      return stateChange(state, {
        status: 'ERROR',
      });
    }
    case EDIT_AUTH_STATUS_INCORRECT_PASSWORD: {
      return stateChange(state, {
        status: 'INCORRECT_PASSWORD',
      });
    }
    case EDIT_AUTH_STATUS_NO_PASSWORD: {
      return stateChange(state, {
        status: 'NO_PASSWORD',
      });
    }
    default: {
      return state;
    }
  }
}
