import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import BudgetRings from './BudgetRings';
import BudgetContainer from './BudgetContainer';
import IncomeComponent from './IncomeComponent';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false
    }
  }
  componentDidMount(){
    this.props.fetchBills();
    this.props.fetchSpendings();
    this.props.fetchSavingsIncome();
    this.props.fetchSavings();
    setTimeout(() => {
      this.setState({ render: true });
    }, 1000);
  }

  render() {

    //Total Bill Logic
    const { bills } = this.props;

    const billAmountArray = [];

    const billObjectToIndividualBill = _.map(this.props.bills, bill => {
      const IndividualBillAmount = bill.billAmount;
      billAmountArray.push(IndividualBillAmount);});

    const totalBill =
      billAmountArray.reduce((a, b) => a + b, 0);

    //Total Spending Logic
    const { spendings } = this.props;

    const spendingAmountArray = [];

    const spendingObjectToIndividualSpending = _.map(this.props.spendings, spending => {
      const IndividualSpendingAmount = spending.spendingAmount;
      spendingAmountArray.push(IndividualSpendingAmount);
    });

    const totalSpending = spendingAmountArray.reduce((a, b) => a + b, 0);


    //Total Savings Logic
    const { savings } = this.props;

    const savingsAmountArray = [];

    const savingsObjectToIndividualSaving = _.map(this.props.savings, saving => {
      const IndividualSavingAmount = saving.savingAmount;
      savingsAmountArray.push(IndividualSavingAmount);
    });

    const totalSaving = savingsAmountArray.reduce((a, b) => a + b, 0);

    //Income, Saving Goal, and Remaning Funds Logic
    const { total } = this.props;
    if (!total) {
      return ( <div>Loading ...</div> )
    }

    if (!total.data[0]) {
      return ( <div><p>Please Add Income and savings in the profile tab</p></div>)
    }

    const income = total.data[0].income;

    const savingsGoal = total.data[0].savingsGoal;

    const remainingFunds = income - savingsGoal - totalBill - totalSpending;

    if(this.state.render) {
    return (
        <div className="center-align">
          <BudgetRings
            totalBill={totalBill}
            totalSpending={totalSpending}
            totalSaving={totalSaving}
            income={income}
            savingsGoal ={savingsGoal}
            remainingFunds={remainingFunds}
          />
          <IncomeComponent
            totalBill={totalBill}
            totalSpending={totalSpending}
            totalSaving={totalSaving}
            income={income}
            savingsGoal ={savingsGoal}
            remainingFunds={remainingFunds}
          />
          <BudgetContainer />
      </div>
    );
  } else {
    return (
      <div>Loading???</div>
    )
  }
  };
}

function mapStateToProps(state) {
  return {
    bills: state.bills,
    spendings: state.spendings,
    savings: state.savings,
    total: state.savingIncome
  }
}

export default connect(mapStateToProps, actions)(Dashboard);
