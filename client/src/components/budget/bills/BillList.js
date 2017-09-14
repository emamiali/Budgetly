import React, { Component } from 'react';
import { connect } from 'react-redux';

class BillList extends Component {
  render() {
    return (
      <ul className="collection">
        <li className="collection-item">This should be each bill</li>
      </ul>
    );
  };
}

function mapStateToProps(state) {
  return { bills: state.bills}
}

export default connect(mapStateToProps)(BillList);
