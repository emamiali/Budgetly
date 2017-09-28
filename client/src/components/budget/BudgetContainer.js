import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import SpendingList from './spendings/SpendingList';
import BillList from './bills/BillList';
import SavingsList from './savings/SavingsList';
import IncomeComponent from '../profile/IncomeComponent';

class BudgetContainer extends Component {
  componentDidMount(){
    this.props.fetchBills()
  }
  render() {
    return (
      <div className="center-align">
        <div className="collection">
          <IncomeComponent />
        </div>
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

export default connect(null, actions)(BudgetContainer);
