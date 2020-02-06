const initialState = {
  isLoggedIn: false,
  info: {},
  records: [],
  loading: true
};

const mainReducer = (state = initialState, action) => {
  if (action.type === 'HANDLE_LOGIN') {
    if (action.payload.hasOwnProperty('error')) {
      state.isLoggedIn = false;
    } else {
      state.isLoggedIn = true;
      state.info = action.payload;
    }

    state.loading = false;

    return Object.assign({}, state);
  }

  if (action.type === 'HANDLE_LOGOUT') {
    state.isLoggedIn = false;
    return Object.assign({}, state);
  }

  if (action.type === 'FETCH_RECORDS') {
    state.isLoggedIn = true;
    state.records = [...state.records, ...action.payload];

    return Object.assign({}, state);
  }

  return state;
};

export default mainReducer;
