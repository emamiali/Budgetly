import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBills } from '../../../actions';


class BillList extends Component {
  componentDidMount() {
    this.props.fetchBills();
  }

  render() {
    return (
      <div>
        <div>
          <ul className="collection">
            <li className="collection-item">This should be each bill</li>
          </ul>
        </div>
        <div>
          <Link to="/bills/new" className="waves-effect waves-light btn">
            Add new Bill
          </Link>
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { bills: state.bills}
}

export default connect(mapStateToProps, { fetchBills })(BillList);
