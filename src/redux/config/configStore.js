import { createStore, combineReducers } from 'redux';
import accountHandler from '../modules/accountHandler';

const rootReducer = combineReducers({
  accountHandler,
});
const store = createStore(rootReducer);

export default store;
