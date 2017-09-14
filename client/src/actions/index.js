import axios from 'axios';
import { FETCH_USER, FETCH_BILLS, FETCH_SPENDINGS, CREATE_BILLS, FETCH_BILL, DELETE_BILL } from './types';

export function fetchUser() {
  const request = axios.get('/api/current_user');

  return {
    type: FETCH_USER,
    payload: request
  }
}

export function fetchBills() {
  const request = axios.get('/api/bills');

  return {
    type: FETCH_BILLS,
    payload: request
  }
}

export function createBills(values, callback) {
  const request = axios.post('/api/bills', values)
    .then(() => callback());

  return {
    type: CREATE_BILLS,
    payload: request
  }
}

export function fetchBill(bill_id) {
  const request = axios.get('/api/bills/' + bill_id);

  return {
    type: FETCH_BILL,
    payload: request
  }
}

export function deleteBill(bill_id, callback) {
  const request = axios.delete('/api/bills/' + bill_id)
    .then(() => callback());

  return {
    type: DELETE_BILL,
    payload: request
  }
}
