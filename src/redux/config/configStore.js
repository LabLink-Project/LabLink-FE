import { createStore, combineReducers } from 'redux';
import accountHandler from '../modules/accountHandler';
import studyTypeHandler from '../modules/studyHandler';
import createStudyHandler from '../modules/createStudyHandler';

const rootReducer = combineReducers({
  accountHandler,
  studyTypeHandler,
  createStudyHandler,
});
const store = createStore(rootReducer);

export default store;
