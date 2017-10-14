import { stateChange } from '../helper_functions';
import {
  DELETE_DIALOG_OPEN,
  DELETE_DIALOG_CLOSE,
  DELETE_STATUS_INITIAL,
  DELETE_STATUS_PROGRESS,
  DELETE_STATUS_SUCCESS,
  DELETE_STATUS_ERROR,
  DELETE_STATUS_NEED_PASSWORD,
  DELETE_STATUS_PASSWORD_CORRECT,
  DELETE_STATUS_PASSWORD_INCORRECT,
  DELETE_STATUS_NO_PASSWORD,
  DELETE_STATUS_PASSWORD_ERROR,
  RESET,
} from '../../actions';

const initialState = {
  open: false,
  status: 'INITIAL',
};

export default function deleteDialog(state = initialState, action) {
  switch (action.type) {
    case RESET:
      return initialState;
    case DELETE_DIALOG_OPEN: {
      return stateChange(state, {
        open: true,
      });
    }
    case DELETE_DIALOG_CLOSE: {
      return stateChange(state, {
        open: false,
      });
    }
    case DELETE_STATUS_INITIAL: {
      return stateChange(state, {
        status: 'INITIAL',
      });
    }
    case DELETE_STATUS_PROGRESS: {
      return stateChange(state, {
        status: 'PROGRESS',
      });
    }
    case DELETE_STATUS_ERROR: {
      return stateChange(state, {
        status: 'ERROR',
      });
    }
    case DELETE_STATUS_SUCCESS: {
      return stateChange(state, {
        status: 'SUCCESS',
      });
    }
    case DELETE_STATUS_NEED_PASSWORD: {
      return stateChange(state, {
        status: 'NEED_PASSWORD',
      });
    }
    case DELETE_STATUS_NO_PASSWORD: {
      return stateChange(state, {
        status: 'NO_PASSWORD',
      });
    }
    case DELETE_STATUS_PASSWORD_CORRECT: {
      return stateChange(state, {
        status: 'PASSWORD_CORRECT',
      });
    }
    case DELETE_STATUS_PASSWORD_INCORRECT: {
      return stateChange(state, {
        status: 'PASSWORD_INCORRECT',
      });
    }
    case DELETE_STATUS_PASSWORD_ERROR: {
      return stateChange(state, {
        status: 'PASSWORD_ERROR',
      });
    }
    default: {
      return state;
    }
  }
}
