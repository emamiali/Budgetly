import React, { Component } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

class BudgetRings extends Component {
  constructor(props){
    super(props);
    this.state = {
      billDataArray : []
    }
  }

  convertDataObjectToArray() {
    const { billData } = this.props;

    var billDataArray = Object.keys(billData).map( key => {
      return billData[key];
    });
    this.setState={billDataArray: billDataArray}
  }

  render() {
    return (
      <div className="row">
        <div className="col s4">
          <ResponsiveContainer width="100%" aspect={6.0/5.0}>
            <PieChart margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <Pie dataKey='value' data={data} innerRadius='85%' outerRadius='95%' label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="col s4">
          <ResponsiveContainer width="100%" aspect={6.0/5.0}>
            <PieChart margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <Pie dataKey='value' data={data} innerRadius='85%' outerRadius='95%' label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="col s4">
          <ResponsiveContainer width="100%" aspect={6.0/5.0}>
            <PieChart margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <Pie dataKey='value' data={data} innerRadius='85%' outerRadius='95%' label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
}

export default BudgetRings;

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
