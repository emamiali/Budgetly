import { FETCH_SAVINGS_INCOME } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_SAVINGS_INCOME:
      return action.payload;
    default:
      return state;
  }
}
