import axios from 'axios';

export const RECIPE_LOGIN_PROGRESS = 'RECIPE_LOGIN_PROGRESS';
export function recipeLoginProgress() {
  return {
    type: RECIPE_LOGIN_PROGRESS,
  };
}

export const RECIPE_LOGIN_SUCCESS = 'RECIPE_LOGIN_SUCCESS';
export function recipeLoginSuccess() {
  return {
    type: RECIPE_LOGIN_SUCCESS,
  };
}

export const RECIPE_LOGIN_FAIL = 'RECIPE_LOGIN_FAIL';
export function recipeLoginFail() {
  return {
    type: RECIPE_LOGIN_FAIL,
  };
}

export const RECIPE_LOGIN_ERROR = 'RECIPE_LOGIN_ERROR';
export function recipeLoginError() {
  return {
    type: RECIPE_LOGIN_ERROR,
  };
}

export const RECIPE_LOGIN = 'RECIPE_LOGIN';
export function recipeLogin(id, password) {
  return dispatch => {
    dispatch(recipeLoginProgress());
    axios
      .post('/recipe/auth/login', { id, password })
      .then(response => {
        console.log(response);
        if (response.data.authStatus === 'CORRECT PASSWORD') {
          dispatch(recipeLoginSuccess());
        } else {
          dispatch(recipeLoginFail());
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export const RECIPE_LOGOUT_PROGRESS = 'RECIPE_LOGOUT_PROGRESS';
export function recipeLogoutProgress() {
  return {
    type: RECIPE_LOGOUT_PROGRESS,
  };
}

export const RECIPE_LOGOUT_SUCCESS = 'RECIPE_LOGOUT_SUCCESS';
export function recipeLogoutSuccess() {
  return {
    type: RECIPE_LOGOUT_SUCCESS,
  };
}

export const RECIPE_LOGOUT_ERROR = 'RECIPE_LOGOUT_ERROR';
export function recipeLogoutError() {
  return {
    type: RECIPE_LOGOUT_ERROR,
  };
}

export const RECIPE_LOGOUT = 'RECIPE_LOGOUT';
export function recipeLogout() {}
