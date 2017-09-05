import { FETCH_SPENDINGS } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_SPENDINGS:
      return action.payload || false;
    default:
      return state;
  }
}
