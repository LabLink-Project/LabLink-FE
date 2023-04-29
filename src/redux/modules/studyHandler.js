// action value
const GET_STUDY_TYPE = 'GET_STUDY_TYPE';
const SET_STUDY_DETAIL_ADDRESS = 'SET_STUDY_DETAIL_ADDRESS';

// action creator
export const getStudyType = payload => {
  return {
    type: GET_STUDY_TYPE,
    payload,
  };
};

export const setStudyDetailAddress = payload => {
  return {
    type: SET_STUDY_DETAIL_ADDRESS,
    payload,
  };
};

const initialState = {
  studyType: 'all',
  detailAddress: '서울',
};

// reducer
const studyTypeHandler = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDY_TYPE:
      // console.log(action.payload);
      return { ...state, studyType: action.payload };
    case SET_STUDY_DETAIL_ADDRESS:
      console.log(action.payload);
      return { ...state, detailAddress: action.payload };
    default:
      return state;
  }
};

export default studyTypeHandler;
