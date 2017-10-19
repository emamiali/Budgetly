import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import BudgetRings from './BudgetRings';
import BudgetContainer from './BudgetContainer';
import IncomeComponent from './IncomeComponent';

class Dashboard extends Component {
  componentDidMount(){
    this.props.fetchBills();
    this.props.fetchSpendings();
    this.props.fetchSavingsIncome();
    this.props.fetchSavings();
  }

  getTheTotalBill() {
    const { bills } = this.props;

    const billAmountArray = [];

    const billObjectToIndividualBill = _.map(this.props.bills, bill => {
      const IndividualBillAmount = bill.billAmount;
      billAmountArray.push(IndividualBillAmount);});

    const totalBill =
      billAmountArray.reduce((a, b) => a + b, 0);
  }

  render() {
    const { bills } = this.props;

    const billAmountArray = [];

    const billObjectToIndividualBill = _.map(this.props.bills, bill => {
      const IndividualBillAmount = bill.billAmount;
      billAmountArray.push(IndividualBillAmount);});

    const totalBill =
      billAmountArray.reduce((a, b) => a + b, 0);

    return (
      <div className="center-align">
        {console.log('props: ', this.props)}
        <BudgetRings billData={this.props.bills}/>
        {console.log(totalBill)}
        <IncomeComponent totalBill={totalBill}/>
        <BudgetContainer />
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    bills: state.bills
  }
}

export default connect(mapStateToProps, actions)(Dashboard);
