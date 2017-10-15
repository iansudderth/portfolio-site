import axios from 'axios';
import { changeRecipe } from './recipeActions';

export const RECIPE_REQUEST_PROGRESS = 'RECIPE_REQUEST_PROGRESS';
export const recipeRequestProgress = () => ({ type: RECIPE_REQUEST_PROGRESS });

export const RECIPE_REQUEST_SUCCESS = 'RECIPE_REQUEST_SUCCESS';
export const recipeRequestSuccess = () => ({ type: RECIPE_REQUEST_SUCCESS });

export const RECIPE_REQUEST_ERROR = 'RECIPE_REQUEST_ERROR';
export const recipeRequestError = error => ({
  type: RECIPE_REQUEST_ERROR,
  payload: error,
});

export const requestRecipe = id => dispatch => {
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
    },
  );
};

export const UPDATE_RECIPE_LIST_PROGRESS = 'UPDATE_RECIPE_LIST_PROGRESS';
export const updateRecipeListProgress = () => ({
  type: UPDATE_RECIPE_LIST_PROGRESS,
});

export const UPDATE_RECIPE_LIST_SUCCESS = 'UPDATE_RECIPE_LIST_SUCCESS';
export const updateRecipeListSuccess = () => ({
  type: UPDATE_RECIPE_LIST_SUCCESS,
});

export const UPDATE_RECIPE_LIST_ERROR = 'UPDATE_RECIPE_LIST_ERROR';
export const updateRecipeListError = error => ({
  type: UPDATE_RECIPE_LIST_ERROR,
  payload: error,
});

export const UPDATE_RECIPE_LIST = 'UPDATE_RECIPE_LIST';
export const updateRecipeList = pages => ({
  type: UPDATE_RECIPE_LIST,
  payload: pages,
});

export const REQUEST_UPDATE_RECIPE_LIST = 'REQUEST_UPDATE_RECIPE_LIST';
export const requestUpdateRecipeList = (pageIndex = 0) => dispatch => {
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
    },
  );
};

export const PUBLISH_RECIPE_PROGRESS = 'PUBLISH_RECIPE_PROGRESS';
export const publishRecipeProgress = () => ({ type: PUBLISH_RECIPE_PROGRESS });

export const PUBLISH_RECIPE_SUCCESS = 'PUBLISH_RECIPE_SUCCESS';
export const publishRecipeSuccess = () => ({ type: PUBLISH_RECIPE_SUCCESS });

export const PUBLISH_RECIPE_ERROR = 'PUBLISH_RECIPE_ERROR';
export const publishRecipeError = () => ({ type: PUBLISH_RECIPE_ERROR });

export const PUBLISH_RECIPE = 'PUBLISH_RECIPE';
export const publishRecipe = (recipe, password) => dispatch => {
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
    },
  );
};
