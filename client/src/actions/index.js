import axios from 'axios';
import { FETCH_USER, FETCH_BILLS, FETCH_SPENDINGS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchBills = () => async dispatch => {
  const res = await axios.get('/api/bills');
  dispatch({ type: FETCH_BILLS, payload: res.data });
}

export const fetchSpendings = () => async dispatch => {
  const res = await axios.get('/api/spendings');
  dispatch({ type: FETCH_SPENDINGS, payload: res.data });
}
