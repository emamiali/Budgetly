import React, { Component } from 'react';


class IncomeComponent extends Component {
  render() {
    return (
      <div style={IncomeComponentStyle} className='row'>
        <div className="col s6 left-align">
          <p><strong>Total Earning --- </strong> {this.props.income} </p>
          <p><strong>Savings Goal --- </strong> {this.props.savingsGoal} </p>
          <p><strong>Total Savings --- </strong> {this.props.totalSaving}</p>
        </div>
        <div className="col s6 left-align">
          <p><strong>Total Spendings --- </strong> {this.props.totalSpending} </p>
          <p><strong>Total Bills --- </strong> {this.props.totalBill} </p>
          <p><strong>Remaining Funds --- </strong> {this.props.remainingFunds} </p>
        </div>
      </div>
    );
  };
}

export default IncomeComponent;

const IncomeComponentStyle = {
  color: "rgb(0, 89, 14)",
  paddingLeft: "20px"
};
