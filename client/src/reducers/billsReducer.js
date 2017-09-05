import { FETCH_BILLS } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_BILLS:
      return action.payload || false;
    default:
      return state;
  }
}
