// action value
const GET_STUDY_TYPE = 'GET_STUDY_TYPE';

// action creator
export const getStudyType = payload => {
  return {
    type: GET_STUDY_TYPE,
    payload,
  };
};

const initialState = {
  studyType: '',
};

// reducer
const studyTypeHandler = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDY_TYPE:
      // console.log(action.payload);
      return { studyType: action.payload };
    default:
      return state;
  }
};

export default studyTypeHandler;
