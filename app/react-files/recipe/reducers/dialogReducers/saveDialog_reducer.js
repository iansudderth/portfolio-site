import { stateChange } from '../helper_functions';

import {
  SAVE_DIALOG_OPEN,
  SAVE_DIALOG_CLOSE,
  SAVE_STATUS_INITIAL,
  SAVE_STATUS_PROGRESS,
  SAVE_STATUS_SUCCESS,
  SAVE_STATUS_ERROR,
  RESET,
} from '../../actions';

const initialState = {
  open: false,
  status: 'INITIAL',
};

export default function saveDialog(state = initialState, action) {
  switch (action.type) {
    case RESET:
      return initialState;
    case SAVE_DIALOG_OPEN: {
      return stateChange(state, {
        open: true,
      });
    }
    case SAVE_DIALOG_CLOSE: {
      return stateChange(state, {
        open: false,
      });
    }
    case SAVE_STATUS_INITIAL: {
      return stateChange(state, {
        status: 'INITIAL',
      });
    }
    case SAVE_STATUS_PROGRESS: {
      return stateChange(state, {
        status: 'PROGRESS',
      });
    }
    case SAVE_STATUS_SUCCESS: {
      return stateChange(state, {
        status: 'SUCCESS',
      });
    }
    case SAVE_STATUS_ERROR: {
      return stateChange(state, {
        status: 'ERROR',
      });
    }
    default: {
      return state;
    }
  }
}
