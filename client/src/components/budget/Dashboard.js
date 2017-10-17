import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import BudgetRings from './BudgetRings';
import BudgetContainer from './BudgetContainer';

class Dashboard extends Component {
  render() {
    return (
      <div className="center-align">
        <BudgetRings />
        <BudgetContainer />
      </div>
    );
  };
}

export default connect(null, actions)(Dashboard);
