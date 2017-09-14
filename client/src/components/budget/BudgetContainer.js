import React, { Component } from 'react';
import SpendingList from './SpendingList';
import BillList from './bills/BillList';
import Savings from './Savings';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class BudgetContainer extends Component {
  componentDidMount(){
    this.props.fetchBills()
  }
  render() {
    return (
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
    );
  };
}

export default connect(null, actions)(BudgetContainer);
