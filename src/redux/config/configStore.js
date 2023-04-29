import { createStore, combineReducers } from 'redux';
import accountHandler from '../modules/accountHandler';
import studyTypeHandler from '../modules/studyHandler';

const rootReducer = combineReducers({
  accountHandler,
  studyTypeHandler,
});
const store = createStore(rootReducer);

export default store;
