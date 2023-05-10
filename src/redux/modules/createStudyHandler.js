// action value
const CREATE_STUDY = 'CREATE_STUDY';

// action creator
/**
 * set study info
 * @param {object} payload, study info(key: value)
 */
export const createStudy = payload => {
  return {
    type: CREATE_STUDY,
    payload,
  };
};

const initialState = {
  title: null,
  studyInfo: null,
  description: null,
  benefit: null,
  category: null,
  date: null,
  address: null,
  pay: null,
  subjectGender: null,
  subjectMinAge: null,
  subjectMaxAge: null,

  endDate: null,
};

// reducer
const createStudyHandler = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STUDY:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    default:
      return state;
  }
};

export default createStudyHandler;
