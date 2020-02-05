const initialState = {
  isLoggedIn: false,
  info: {}
};

const mainReducer = (state = initialState, action) => {
  if (action.type === 'HANDLE_LOGIN') {
    state.info = action.payload;
    state.isLoggedIn = true;

    return Object.assign({}, state);
  }

  if (action.type === 'HANDLE_LOGOUT') {
    state.isLoggedIn = false;
    return Object.assign({}, state);
  }

  return state;
};

export default mainReducer;
