import axios from 'axios';
import { changeRecipe } from './recipeActions';

export const RECIPE_REQUEST_PROGRESS = 'RECIPE_REQUEST_PROGRESS';
function recipeRequestProgress() {
  return {
    type: RECIPE_REQUEST_PROGRESS,
  };
}

export const RECIPE_REQUEST_SUCCESS = 'RECIPE_REQUEST_SUCCESS';
function recipeRequestSuccess() {
  return {
    type: RECIPE_REQUEST_SUCCESS,
  };
}
export const RECIPE_REQUEST_ERROR = 'RECIPE_REQUEST_ERROR';
function recipeRequestError(error) {
  return {
    type: RECIPE_REQUEST_ERROR,
    payload: error,
  };
}

export function requestRecipe(id) {
  return dispatch => {
    dispatch(recipeRequestProgress());

    return axios.get(`/recipe/${id}`).then(
      response => {
        dispatch(recipeRequestSuccess());
        const newRecipe = response.data;
        dispatch(changeRecipe(newRecipe));
      },
      error => {
        console.log(error);
        dispatch(recipeRequestError(error));
      }
    );
  };
}

export const UPDATE_RECIPE_LIST_PROGRESS = 'UPDATE_RECIPE_LIST_PROGRESS';
function updateRecipeListProgress() {
  return {
    type: UPDATE_RECIPE_LIST_PROGRESS,
  };
}

export const UPDATE_RECIPE_LIST_SUCCESS = 'UPDATE_RECIPE_LIST_SUCCESS';
function updateRecipeListSuccess() {
  return {
    type: UPDATE_RECIPE_LIST_SUCCESS,
  };
}

export const UPDATE_RECIPE_LIST_ERROR = 'UPDATE_RECIPE_LIST_ERROR';
function updateRecipeListError(error) {
  return {
    type: UPDATE_RECIPE_LIST_ERROR,
    payload: error,
  };
}

export const UPDATE_RECIPE_LIST = 'UPDATE_RECIPE_LIST';
function updateRecipeList(pages) {
  return {
    type: UPDATE_RECIPE_LIST,
    payload: pages,
  };
}

export const REQUEST_UPDATE_RECIPE_LIST = 'REQUEST_UPDATE_RECIPE_LIST';
export function requestUpdateRecipeList(pageIndex = 0) {
  return dispatch => {
    dispatch(updateRecipeListProgress());
    axios.get(`/recipe/index/${pageIndex}`).then(
      response => {
        console.log(response);
        dispatch(updateRecipeListSuccess());
        dispatch(updateRecipeList(response.data.pages));
      },
      error => {
        dispatch(updateRecipeListError(error));
        console.log(error);
      }
    );
  };
}

export const PUBLISH_RECIPE_PROGRESS = 'PUBLISH_RECIPE_PROGRESS';
export function publishRecipeProgress() {
  return {
    type: PUBLISH_RECIPE_PROGRESS,
  };
}

export const PUBLISH_RECIPE_SUCCESS = 'PUBLISH_RECIPE_SUCCESS';
export function publishRecipeSuccess() {
  return {
    type: PUBLISH_RECIPE_SUCCESS,
  };
}

export const PUBLISH_RECIPE_ERROR = 'PUBLISH_RECIPE_ERROR';
export function publishRecipeError() {
  return {
    type: PUBLISH_RECIPE_ERROR,
  };
}

export const PUBLISH_RECIPE = 'PUBLISH_RECIPE';
export function publishRecipe(recipe, password) {
  return dispatch => {
    dispatch(publishRecipeProgress());
    axios.post('/recipe/new', { recipe, password }).then(
      response => {
        dispatch(publishRecipeSuccess());
        dispatch(requestRecipe(response.data.recipeId));
        console.log(response);
      },
      error => {
        dispatch(publishRecipeError());
        console.log(error);
      }
    );
  };
}
