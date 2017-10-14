import { stateChange } from '../helper_functions';

import {
  UPDATE_DIALOG_OPEN,
  UPDATE_DIALOG_CLOSE,
  UPDATE_STATUS_INITIAL,
  UPDATE_STATUS_PROGRESS,
  UPDATE_STATUS_SUCCESS,
  UPDATE_STATUS_NEED_PASSWORD,
  UPDATE_STATUS_PASSWORD_PROGRESS,
  UPDATE_STATUS_INCORRECT_PASSWORD,
  UPDATE_STATUS_PASSWORD_ERROR,
  UPDATE_STATUS_ERROR,
  RESET,
} from '../../actions';

const initialState = {
  open: false,
  status: 'INITIAL',
};

export default function updateDialog(state = initialState, action) {
  switch (action.type) {
    case RESET:
      return initialState;
    case UPDATE_DIALOG_OPEN: {
      return stateChange(state, {
        open: true,
      });
    }
    case UPDATE_DIALOG_CLOSE: {
      return stateChange(state, {
        open: false,
      });
    }
    case UPDATE_STATUS_INITIAL: {
      return stateChange(state, {
        status: 'INITIAL',
      });
    }
    case UPDATE_STATUS_PROGRESS: {
      return stateChange(state, {
        status: 'PROGRESS',
      });
    }
    case UPDATE_STATUS_SUCCESS: {
      return stateChange(state, {
        status: 'SUCCESS',
      });
    }
    case UPDATE_STATUS_NEED_PASSWORD: {
      return stateChange(state, {
        status: 'NEED_PASSWORD',
      });
    }
    case UPDATE_STATUS_PASSWORD_PROGRESS: {
      return stateChange(state, {
        status: 'PASSWORD_PROGRESS',
      });
    }
    case UPDATE_STATUS_INCORRECT_PASSWORD: {
      return stateChange(state, {
        status: 'INCORRECT_PASSWORD',
      });
    }
    case UPDATE_STATUS_PASSWORD_ERROR: {
      return stateChange(state, {
        status: 'PASSWORD_ERROR',
      });
    }
    case UPDATE_STATUS_ERROR: {
      return stateChange(state, {
        status: 'ERROR',
      });
    }
    default: {
      return state;
    }
  }
}
