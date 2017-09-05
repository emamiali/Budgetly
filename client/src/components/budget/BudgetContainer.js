import React, { Component } from 'react';
import SpendingList from './SpendingList';
import BillList from './BillList';
import Savings from './Savings';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class BudgetContainer extends Component {
  componentDidMount(){
    this.props.fetchBills()
  }
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

export default connect(null, actions)(BudgetContainer);
