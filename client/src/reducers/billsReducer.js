import _ from 'lodash';
import { FETCH_BILLS, FETCH_BILL, DELETE_BILL } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_BILL:
      return { ...state, [action.payload.data._id]: action.payload.data }
    case FETCH_BILLS:
      return _.mapKeys(action.payload.data, '_id');
    default:
      return state;
  }
}
