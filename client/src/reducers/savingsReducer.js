import _ from 'lodash';
import { FETCH_SAVINGS, FETCH_SAVING, DELETE_SAVING } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case DELETE_SAVING:
      return _.omit(state, action.payload);
    case FETCH_SAVING:
      return { ...state, [action.payload.data._id]: action.payload.data }
    case FETCH_SAVINGS:
      return _.mapKeys(action.payload.data, '_id');
    default:
      return state;
  }
}
