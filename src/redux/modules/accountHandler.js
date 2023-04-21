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
      // 아직 nickname 토큰에 담기 전
      // payload = jwt token
      const { role, nickname } = jwtDecode(action.payload);
      console.log(role, nickname);
      if (!role) return state;
      // if (!nickname) return state;

      return { role, nickname };
    default:
      return state;
  }
};

// export default reducer
export default accountHandler;
