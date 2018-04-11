import axios from 'axios';
import throttleAction from 'throttle-action';

// ===============
// Action Creators
// ===============

export const NEW_ITEM = 'NEW_ITEM';
export const newItem = (content = '', parent = 'root') => ({
  type: NEW_ITEM,
  payload: { content, parent },
});

export const CHANGE_BASE = 'CHANGE_BASE';
export const changeBaseItem = id => ({
  type: CHANGE_BASE,
  payload: id,
});

export const COMPLETE_ITEM = 'COMPLETE_ITEM';
export const completeItem = id => ({
  type: COMPLETE_ITEM,
  payload: id,
});

export const DELETE_ITEM = 'DELETE_ITEM';
export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: id,
});

export const REORDER_ITEM = 'REORDER_ITEM';
export const reorderItem = (parentID, oldIndex, newIndex) => ({
  type: REORDER_ITEM,
  payload: { parentID, oldIndex, newIndex },
});

export const CHANGE_COLOR = 'CHANGE_COLOR';
export const changeColor = (id, color) => ({
  type: CHANGE_COLOR,
  payload: { id, color },
});

export const UPDATE_ITEM = 'UPDATE_ITEM';
export const updateItem = (id, newText) => ({
  type: UPDATE_ITEM,
  payload: { id, newText },
});

export const UPDATE_PROGRESS = 'UPDATE_PROGRESS';
export const updateProgress = () => ({ type: UPDATE_PROGRESS });

export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const updateComplete = () => ({ type: UPDATE_SUCCESS });

export const UPDATE_ERROR = 'UPDATE_ERROR';
export const updateError = () => ({ type: UPDATE_ERROR });

export const UPDATE_DATA = 'UPDATE_DATA';
export const updateData = (id, newState) => dispatch => {
  dispatch(updateProgress());

  return axios.put(`/todo/${id}`, newState).then(
    response => {
      dispatch(updateComplete());
    },
    error => {
      console.log(error);
      dispatch(updateError());
    },
  );
};

export const updateDataThrottled = throttleAction(updateData, 5000);
