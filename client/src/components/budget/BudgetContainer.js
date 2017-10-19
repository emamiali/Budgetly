import React, { Component } from 'react';
import SpendingList from './spendings/SpendingList';
import BillList from './bills/BillList';
import SavingsList from './savings/SavingsList';

class BudgetContainer extends Component {
  render() {
    return (
      <div className="center-align">
        <div className="row">
          <div className="col s4">
            <SpendingList />
          </div>
          <div className="col s4">
            <BillList />
          </div>
          <div className="col s4">
            <SavingsList />
          </div>
        </div>
      </div>
    );
  };
}

export default BudgetContainer;
