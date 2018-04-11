import { stateChange } from '../helper_functions';

import {
  DISCARD_DIALOG_OPEN,
  DISCARD_DIALOG_CLOSE,
  DISCARD_STATUS_INITIAL,
  DISCARD_STATUS_LOGOUT_PROGRESS,
  DISCARD_STATUS_LOGOUT_SUCCESS,
  DISCARD_STATUS_LOGOUT_ERROR,
  RESET,
} from '../../actions';

const initialState = {
  open: false,
  status: 'INITIAL',
};

export default function discardChangesDialog(state = initialState, action) {
  switch (action.type) {
    case RESET:
      return initialState;
    case DISCARD_DIALOG_OPEN: {
      return stateChange(state, {
        open: true,
      });
    }
    case DISCARD_DIALOG_CLOSE: {
      return stateChange(state, {
        open: false,
      });
    }
    case DISCARD_STATUS_INITIAL: {
      return stateChange(state, {
        status: 'INITIAL',
      });
    }
    case DISCARD_STATUS_LOGOUT_PROGRESS: {
      return stateChange(state, {
        status: 'LOGOUT_PROGRESS',
      });
    }
    case DISCARD_STATUS_LOGOUT_SUCCESS: {
      return stateChange(state, {
        status: 'LOGOUT_SUCCESS',
      });
    }
    case DISCARD_STATUS_LOGOUT_ERROR: {
      return stateChange(state, {
        status: 'LOGOUT_ERROR',
      });
    }
    default: {
      return state;
    }
  }
}
