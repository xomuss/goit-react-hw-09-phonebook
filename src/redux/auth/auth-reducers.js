import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  toggleModalWindowAction,
  registerSucces,
  registerError,
  loginSucces,
  loginError,
  logoutSucces,
  logoutError,
  getCurrentUserSucces,
  getCurrentUserError,
} from './auth-actions';

const modal = createReducer(null, {
  [toggleModalWindowAction]: (state, _) => !state,
});

const initialState = { name: null, email: null };

const user = createReducer(initialState, {
  [registerSucces]: (_, { payload }) => payload.user,
  [loginSucces]: (_, { payload }) => payload.user,
  [logoutSucces]: () => initialState,
  [getCurrentUserSucces]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSucces]: (_, { payload }) => payload.token,
  [loginSucces]: (_, { payload }) => payload.token,
  [logoutSucces]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [registerSucces]: () => true,
  [loginSucces]: () => true,
  [getCurrentUserSucces]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSucces]: () => false,
});

export default combineReducers({
  modal,
  user,
  token,
  error,
  isAuthenticated,
});
