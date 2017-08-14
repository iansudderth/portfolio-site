import axios from 'axios'
import throttleAction from 'throttle-action';


// ===============
// Action Creators
// ===============

export const NEW_ITEM = "NEW_ITEM";
export function newItem(content = "", parent = "root") {
	return {
		type: NEW_ITEM,
		payload: {
			content,
			parent
		}
	};
}
export const CHANGE_BASE = "CHANGE_BASE";
export function changeBaseItem(id) {
	return {
		type: CHANGE_BASE,
		payload: id
	};
}

export const COMPLETE_ITEM = "COMPLETE_ITEM";
export function completeItem(id) {
	return {
		type: COMPLETE_ITEM,
		payload: id
	};
}

export const DELETE_ITEM = "DELETE_ITEM";
export function deleteItem(id) {
	return {
		type: DELETE_ITEM,
		payload: id
	};
}

export const REORDER_ITEM = "REORDER_ITEM";
export function reorderItem(parentID, oldIndex, newIndex) {
	return {
		type: REORDER_ITEM,
		payload: {
			parentID,
			oldIndex,
			newIndex
		}
	};
}

export const CHANGE_COLOR = "CHANGE_COLOR";
export function changeColor(id,color){
	return{
		type: CHANGE_COLOR,
		payload: {
			id,
			color
		}
	}
}


export const UPDATE_ITEM = "UPDATE_ITEM";
export function updateItem(id,newText){
	return {
		type:UPDATE_ITEM,
		payload:{
			id,
			newText
		}
	}
}



export const UPDATE_DATA = "UPDATE_DATA"
export function updateData(id, newState){
	return function (dispatch) {
		dispatch(updateProgress())

		return axios.put(`/todo/${id}`, newState)
			.then(

				response => {
					dispatch(updateComplete())
				},

				error => {
					dispatch(updateError())
				}
				)
	}
}

export const updateDataThrottled = throttleAction(updateData, 5000);


export const UPDATE_PROGRESS = "UPDATE_PROGRESS"
export function updateProgress(){
	return{
		type:UPDATE_PROGRESS
	}
}


export const UPDATE_SUCCESS = "UPDATE_SUCCESS"
export function updateComplete(){
	return{
		type:UPDATE_SUCCESS
	}
}

export const UPDATE_ERROR = "UPDATE_ERROR"
export function updateError(){
	return{
		type:UPDATE_ERROR
	}
}