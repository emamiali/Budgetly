import React, { Component } from 'react';

export default class BudgetRings extends Component {
  render() {
    return (
      <div className='valign-wrapper'>
        <div>
          <p>Spending Ring</p>
        </div>
        <div>
          <p>Bill Ring</p>
        </div>
        <div>
          <p>Saving Ring</p>
        </div>
      </div>
    );
  };
}
