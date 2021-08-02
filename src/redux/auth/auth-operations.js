import axios from 'axios';
import {
  toggleModalWindowAction,
  registerRequest,
  registerSucces,
  registerError,
  loginRequest,
  loginSucces,
  loginError,
  logoutRequest,
  logoutSucces,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSucces,
  getCurrentUserError,
} from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const toggleModal = () => dispatch => {
  dispatch(toggleModalWindowAction());
};

export const register = params => async dispatch => {
  dispatch(registerRequest());

  try {
    const response = await axios.post('/users/signup', params);

    token.set(response.data.token);
    dispatch(registerSucces(response.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

export const login = params => async dispatch => {
  dispatch(loginRequest());

  try {
    const response = await axios.post('/users/login', params);

    token.set(response.data.token);
    dispatch(loginSucces(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logOut = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(logoutSucces());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(getCurrentUserSucces(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};
