import React, { Component } from 'react';
import BudgetRings from './BudgetRings';
import BudgetContainer from './BudgetContainer';
// import Button from './Button';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="center-align">
        <BudgetRings />
        <div className="valign-wrapper">
          <BudgetContainer />
        </div>
        {/* <Button /> */}
      </div>
    );
  };
}
