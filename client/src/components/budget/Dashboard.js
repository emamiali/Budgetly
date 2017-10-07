import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import BudgetRings from './BudgetRings';
import BudgetContainer from './BudgetContainer';

class Dashboard extends Component {
  componentDidMount(){
    this.props.fetchBills();
  }
  render() {
    return (
      <div className="center-align">
        <BudgetRings billData={this.props.bills}/>
        <BudgetContainer />
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { bills: state.bills}
}

export default connect(mapStateToProps, actions)(Dashboard);
