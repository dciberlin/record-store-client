import {
  checkCredentials,
  getRecords,
  authoriseUser,
  handleLogOut
} from '../lib/helpers.js';

export const auth = payload => {
  return async dispatch => {
    const data = await authoriseUser();
    dispatch({
      type: 'HANDLE_LOGIN',
      payload: data
    });
  };
};

export const handleLogin = payload => {
  return async dispatch => {
    const data = await checkCredentials(payload);
    dispatch({
      type: 'HANDLE_LOGIN',
      payload: data
    });
  };
};

export const logOut = payload => {
  return async dispatch => {
    const data = await handleLogOut();
    dispatch({
      type: 'HANDLE_LOGOUT',
      payload
    });
  };
};

export const fetchRecords = payload => {
  return async dispatch => {
    const data = await getRecords();
    dispatch({
      type: 'FETCH_RECORDS',
      payload: data
    });
  };
};
