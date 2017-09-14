import _ from 'lodash';
import { FETCH_BILLS, FETCH_BILL, DELETE_BILL } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_BILLS:
      return _.mapKeys(action.payload.data, '_id');
    default:
      return state;
  }
}
