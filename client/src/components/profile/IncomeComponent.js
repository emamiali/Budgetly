import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSavingsIncome, fetchBills, fetchSpendings } from '../../actions';



class IncomeComponent extends Component {

  componentDidMount() {
    this.props.fetchBills();
    this.props.fetchSpendings();
    this.props.fetchSavingsIncome();
  }

  renderTotalBills() {
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
    return ( <p> {totalBill} </p> );
  }

  renderTotalSpendings() {
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
    return ( <p> { totalSpending } </p>);
  }
  // const { fetchSavingsIncome } = this.props;



  render() {
    return (
      <div className="row" style={IncomeComponentStyle}>
        <div className="col s6 left-align">
          <p><strong>Income --- </strong></p>
          <p><strong>Savings Goal --- </strong></p>
          <p><strong>Total Savings --- </strong></p>
        </div>
        <div className="col s6 left-align">
          <strong>Total Spendings --- </strong>{this.renderTotalSpendings()}
          <strong>Total Bills --- </strong> {this.renderTotalBills()}
          <p><strong>Remaining Funds --- </strong></p>
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    total: state.savingsIncome,
    spendings: state.spendings,
    bills: state.bills
  }
}

export default connect(mapStateToProps, {fetchBills, fetchSavingsIncome, fetchSpendings })(IncomeComponent);

const IncomeComponentStyle = {
  color: "rgb(0, 89, 14)",
  paddingLeft: "20px"
};
