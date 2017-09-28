import React, { Component } from 'react';
import BudgetRings from './BudgetRings';
import BudgetContainer from './BudgetContainer';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="center-align">
        <BudgetRings />
        <BudgetContainer />
      </div>
    );
  };
}
