import axios from 'axios';
import { FETCH_USER, FETCH_BILLS, CREATE_BILLS, FETCH_BILL, DELETE_BILL } from './types';
import { FETCH_SPENDINGS, FETCH_SPENDING, CREATE_SPENDINGS, DELETE_SPENDING } from './types'


const BILLS_ROUTE = '/api/bills'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res });
}

export const fetchBills = () => async dispatch => {
  const res = await axios.get(BILLS_ROUTE);

  dispatch({ type: FETCH_BILLS, payload: res });
}

export const createBills = (values, callback) => async dispatch => {
  const res = await axios.post(BILLS_ROUTE, values).then(() => callback());

  dispatch({ type: CREATE_BILLS, payload: res });
}

export const fetchBill = bill_id => async dispatch => {
  const res = await axios.get(`${BILLS_ROUTE}/${bill_id}`);

  dispatch({ type: FETCH_BILL, payload: res });
}

export const deleteBill = (bill_id, callback) => async dispatch => {
  const res = await axios.delete(`${BILLS_ROUTE}/${bill_id}`).then(() => callback());

  dispatch({ type: DELETE_BILL, payload: res });
}


export function fetchSpendings(){
  const request = axios.get('/api/spendings');

  return {
    type: FETCH_SPENDINGS,
    payload: request
  }
}

export function createSpendings(values, callback) {
  const request = axios.post('/api/spendings', values)
    .then(() => callback());

  return {
    type: CREATE_SPENDINGS,
    payload: request
  }
}

export function fetchSpending(spending_id) {
  const request = axios.get('/api/spendings/' + spending_id);

  return {
    type: FETCH_SPENDING,
    payload: request
  }
}

export function deleteSpending(spending_id, callback) {
  const request = axios.delete('/api/spendings/' + spending_id)
    .then(() => callback());

  return {
    type: DELETE_SPENDING,
    payload: request
  }
}
