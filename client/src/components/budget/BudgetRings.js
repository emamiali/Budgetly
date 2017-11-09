import React, { Component } from 'react';
import _ from 'lodash'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { connect } from 'react-redux';
import { fetchSpendings, fetchBills, fetchSavings } from '../../actions';

class BudgetRings extends Component {
  constructor(props) {
  super(props);
  this.state = {
      billData: [
        {
          name: "Total Bill",
          value: this.props.totalBill,
          fill: "#053af5"
        }, {
          name: "Remaining Funds",
          value: this.props.remainingFunds,
          fill: '#96afbb'
        }
      ],
      spendingData: [
        {
          name: "Total Spending",
          value: this.props.totalSpending,
          fill: "#25693a"
        }, {
          name: "Remaining Funds",
          value: this.props.remainingFunds,
          fill: '#96afbb'
        }
      ]
    } // end of state
} // end of constructor

render() {
  return (
    <div className="row">
      <div className="col s4">
        <ResponsiveContainer width="100%" aspect={6.0/5.0}>
          <PieChart margin={{top: 30, right: 5, left: 30, bottom: 30}}>
            <Pie dataKey='value' data={this.state.billData} innerRadius='85%' outerRadius='95%' label />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="col s4">
        <ResponsiveContainer width="100%" aspect={6.0/5.0}>
          <PieChart margin={{top: 30, right: 5, left: 30, bottom: 30}}>
            <Pie dataKey='value' data={this.state.spendingData} innerRadius='85%' outerRadius='95%' label />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="col s4">
        <ResponsiveContainer width="100%" aspect={6.0/5.0}>
          <PieChart margin={{top: 30, right: 5, left: 30, bottom: 30}}>
            <Pie dataKey='value' data={data} innerRadius='85%' outerRadius='95%' label />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    // billData: state.bills,
    spendingData: state.spendings,
    savingData: state.savings
  }
}

export default connect(mapStateToProps, {fetchSpendings, fetchBills, fetchSavings})(BudgetRings);
//
// const data = [
//   {
//     name: "Total Bill",
//     value: totalBill,
//     fill: "#053af5"
//   },
//   {
//     name: "Remaining Funds",
//     value: remainingFunds,
//     fill: 'rgb(150, 175, 187)'
//   }
// ]

const data = [
  {
    name: "TotalSavings",
    value: 2500,
    fill: '#eb3939'
  },
  {
    name: "SavingsRemaining",
    value: 1000,
    fill: 'rgb(15, 115, 232)'
  }
]
