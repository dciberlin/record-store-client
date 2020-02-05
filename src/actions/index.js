import { checkCredentials } from '../lib/helpers.js';

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
  return {
    type: 'HANDLE_LOGOUT',
    payload
  };
};
