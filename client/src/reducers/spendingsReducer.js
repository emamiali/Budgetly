import _ from 'lodash';
import { FETCH_SPENDINGS, FETCH_SPENDING, DELETE_SPENDING } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case DELETE_SPENDING:
      return _.omit(state, action.payload);
    case FETCH_SPENDING:
      return { ...state, [action.payload.data._id]: action.payload.data }
    case FETCH_SPENDINGS:
      return _.mapKeys(action.payload.data, '_id');
    default:
      return state;
  }
}
