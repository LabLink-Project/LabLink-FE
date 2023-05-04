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
  //   thumbnailImage: null,
  // 디테일 image 없음
  //   detailImage: null,
};

// reducer
const createStudyHandler = (state = initialState, action) => {
  //   console.log('redux : ', action.payload);
  switch (action.type) {
    case CREATE_STUDY:
      const { name, value } = action.payload;
      //   console.log(name, value);
      return { ...state, [name]: value };
    default:
      return state;
  }
};

export default createStudyHandler;
