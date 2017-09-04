import React, { Component } from 'react';
import SpendingList from './SpendingList';
import BillList from './BillList';
import Savings from './Savings'

export default class BudgetContainer extends Component {
  render() {
    return (
      <div>
        <SpendingList />
        <BillList />
        <Savings />
      </div>
    );
  };
}
