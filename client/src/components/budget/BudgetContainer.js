import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import SpendingList from './spendings/SpendingList';
import BillList from './bills/BillList';
import Savings from './Savings';
import IncomeComponent from '../profile/TotalFunds';

class BudgetContainer extends Component {
  componentDidMount(){
    this.props.fetchBills()
  }
  render() {
    return (
      <div>
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
            <Savings />
          </div>
        </div>
      </div>
    );
  };
}

export default connect(null, actions)(BudgetContainer);
