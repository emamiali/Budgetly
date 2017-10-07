import React, { Component } from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

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
    console.log(data);
    return (
      <div className="row">
        <div className="col s3">
          <PieChart  width={800} height={400}>
            <Pie dataKey='value' data={data}  cx={200} cy={200} innerRadius={70} outerRadius={90} label />
            <Legend align="left"/>
            <Tooltip />
          </PieChart>

        </div>
        <div className="col s3">
          <PieChart  width={800} height={400}>
            <Pie dataKey='value' data={data}  cx={200} cy={200} innerRadius={70} outerRadius={90} label />
            <Legend align="left"/>
            <Tooltip />
          </PieChart>

        </div>
        <div className="col s3">
          <PieChart  width={800} height={400}>
            <Pie dataKey='value' data={data}  cx={200} cy={200} innerRadius={70} outerRadius={90} label />
            <Legend />
            <Tooltip />
          </PieChart>

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
