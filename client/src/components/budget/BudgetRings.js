import React, { Component } from 'react';

export default class BudgetRings extends Component {
  render() {
    return (
      <div className='row'>
        <div className="col s4">
          <p>Spending Ring</p>
        </div>
        <div className="col s4">
          <p>Bill Ring</p>
        </div>
        <div className="col s4">
          <p>Saving Ring</p>
        </div>
      </div>
    );
  };
}
