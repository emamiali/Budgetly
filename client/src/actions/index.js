import axios from 'axios';
import { FETCH_USER, FETCH_BILLS, CREATE_BILLS, FETCH_BILL, DELETE_BILL } from './types';
import { FETCH_SPENDINGS, FETCH_SPENDING, CREATE_SPENDINGS, DELETE_SPENDING } from './types';
import { FETCH_SAVINGS_INCOME, CREATE_SAVINGS_INCOME } from './types';
import { FETCH_SAVINGS, CREATE_SAVINGS, FETCH_SAVING, DELETE_SAVING } from './types';


const BILLS_ROUTE = '/api/bills';
const SPENDINGS_ROUTE = '/api/spendings';
const SAVINGS_ROUTE = '/api/savings';
const SAVINGS_AND_INCOME_ROUTE = '/api/savings_and_income';

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

export const fetchSpendings = () => async dispatch => {
  const res = await axios.get(SPENDINGS_ROUTE);

  dispatch({ type: FETCH_SPENDINGS, payload: res });
}

export const createSpendings = (values, callback) => async dispatch => {
  const res = await axios.post(SPENDINGS_ROUTE, values).then(() => callback());

  dispatch({ type: CREATE_SPENDINGS, payload: res });
}

export const fetchSpending = spending_id => async dispatch => {
  const res = await axios.get(`${SPENDINGS_ROUTE}/${spending_id}`);

  dispatch({ type: FETCH_SPENDING, payload: res });
}

export const deleteSpending = (spending_id, callback) => async dispatch => {
  const res = await axios.delete(`${SPENDINGS_ROUTE}/${spending_id}`).then(() => callback());

  dispatch({ type: DELETE_SPENDING, payload: res });
}

export const fetchSavings = () => async dispatch => {
  const res = await axios.get(SAVINGS_ROUTE);

  dispatch({ type: FETCH_SAVINGS, payload: res });
}

export const createSavings = (values, callback) => async dispatch => {
  const res = await axios.post(SAVINGS_ROUTE, values).then(() => callback());

  dispatch({ type: CREATE_SAVINGS, payload: res });
}

export const fetchSaving = saving_id => async dispatch => {
  const res = await axios.get(`${SAVINGS_ROUTE}/${saving_id}`);

  dispatch({ type: FETCH_SAVING, payload: res });
}

export const deleteSaving = (saving_id, callback) => async dispatch => {
  const res = await axios.delete(`${SAVINGS_ROUTE}/${saving_id}`).then(() => callback());

  dispatch({ type: DELETE_SAVING, payload: res });
}

export const fetchSavingsIncome = () => async dispatch => {
  const res = await axios.get(SAVINGS_AND_INCOME_ROUTE);

  dispatch({ type: FETCH_SAVINGS_INCOME, payload: res });
}

export const createSavingsAndIncome = (values) => async dispatch => {
  const res = await axios.post(SAVINGS_AND_INCOME_ROUTE, values);

  dispatch({ type: CREATE_SAVINGS_INCOME, payload: res });
}
