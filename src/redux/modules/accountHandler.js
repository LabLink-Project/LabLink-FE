import jwtDecode from 'jwt-decode';

// Action Value
const GET_ACCOUNT_INFO = 'GET_ACCOUNT_INFO';

// Action Creator
export const getAccountInfo = payload => {
  return {
    type: GET_ACCOUNT_INFO,
    payload,
  };
};

// Initial State
const initialState = {
  role: '',
  nickname: '',
};

// Reducer
const accountHandler = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNT_INFO:
      const { role, nickname, companyName } = jwtDecode(action.payload);
      if (!role) return state;
      if (role === 'BUSINESS') return { role, nickname: companyName };
      return { role, nickname };
    default:
      return state;
  }
};

// export default reducer
export default accountHandler;
