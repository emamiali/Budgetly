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

  renderBills() {
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

    return (
      <p>
        {totalBill}
      </p>
    )

  }
  // const { spendings } = this.props;
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
          <p><strong>Total Spendings --- </strong></p>
          <strong>Total Bills --- </strong> {this.renderBills()}
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
