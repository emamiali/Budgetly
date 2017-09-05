import { combineReducers } from 'redux';
import authReducer from './authReducer';
import billsReducer from './billsReducer';
import spendingsReducer from './spendingsReducer'

export default combineReducers({
  auth: authReducer,
  bills: billsReducer,
  spendings: spendingsReducer
});
