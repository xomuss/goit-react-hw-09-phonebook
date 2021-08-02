import { createAction } from '@reduxjs/toolkit';

export const toggleModalWindowAction = createAction('modal/toggle');

export const registerRequest = createAction('auth/registerRequest');
export const registerSucces = createAction('auth/registerSucces');
export const registerError = createAction('auth/registerError');

export const loginRequest = createAction('auth/loginRequest');
export const loginSucces = createAction('auth/loginSucces');
export const loginError = createAction('auth/loginError');

export const logoutRequest = createAction('auth/logoutRequest');
export const logoutSucces = createAction('auth/logoutSucces');
export const logoutError = createAction('auth/logoutError');

export const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
export const getCurrentUserSucces = createAction('auth/getCurrentUserSucces');
export const getCurrentUserError = createAction('auth/getCurrentUserError');
