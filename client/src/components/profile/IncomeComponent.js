import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSavingsIncome, fetchBills, fetchSpendings, fetchSavings } from '../../actions';



class IncomeComponent extends Component {
  componentDidMount() {
    this.props.fetchBills();
    this.props.fetchSpendings();
    this.props.fetchSavingsIncome();
    this.props.fetchSavings();
  }

  renderTotal() {
    const { bills } = this.props;
    if (!bills) {
      return <div>Loading ...</div>
    }
    const billAmountArray = [];
    const billObjectToIndividualBill = _.map(this.props.bills, bill => {
      const IndividualBillAmount = bill.billAmount;
      billAmountArray.push(IndividualBillAmount);
    });
    const totalBill =
      billAmountArray.reduce((a, b) => a + b, 0);

    const { spendings } = this.props;
    if (!spendings) {
      return <div>Loading ...</div>
    }
    const spendingAmountArray = [];
    const spendingObjectToIndividualSpending = _.map(this.props.spendings, spending => {
      const IndividualSpendingAmount = spending.spendingAmount;
      spendingAmountArray.push(IndividualSpendingAmount);
    });
    const totalSpending = spendingAmountArray.reduce((a, b) => a + b, 0);

    const { savings } = this.props;

    if (!savings) {
      return ( <div>Loading ...</div> );
    }

    const savingsAmountArray = [];

    const savingsObjectToIndividualSaving = _.map(this.props.savings, saving => {
      const IndividualSavingAmount = saving.savingAmount;
      savingsAmountArray.push(IndividualSavingAmount);
    });
    const totalSaving = savingsAmountArray.reduce((a, b) => a + b, 0);


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

    return (
      <div>
        <div className="col s6 left-align">
          <p><strong>Total Earning --- </strong> {income} </p>
          <p><strong>Savings Goal --- </strong>  {savingsGoal} </p>
          <p><strong>Total Savings --- </strong> {totalSaving} </p>
        </div>
        <div className="col s6 left-align">
          <p><strong>Total Spendings --- </strong> {totalSpending} </p>
          <p><strong>Total Bills --- </strong> {totalBill} </p>
          <p><strong>Remaining Funds --- </strong> {remainingFunds} </p>
        </div>
      </div>
    );
  }

  renderRemainingFunds() {
    const { bills, spendings, total } = this.props;
    if (!bills || !spendings || !total) {
      return(<div>Something is loading  ...</div>)
    }

  }



  render() {
    return (
      <div className="row" style={IncomeComponentStyle}>
        {this.renderTotal()}
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    total: state.savingIncome,
    spendings: state.spendings,
    bills: state.bills,
    savings: state.savings
  }
}

export default connect(mapStateToProps, {fetchBills, fetchSavingsIncome, fetchSpendings, fetchSavings })(IncomeComponent);

const IncomeComponentStyle = {
  color: "rgb(0, 89, 14)",
  paddingLeft: "20px"
};
