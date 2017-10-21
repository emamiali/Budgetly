import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSavings } from '../../../actions';


class SavingList extends Component {
  componentDidMount() {
    this.props.fetchSavings();
  }

  renderSavings() {
    if (_.isEmpty(this.props.savings)) {
      return (<div> Add a savings</div>)
    }
    return _.map(this.props.savings, saving => {
      return (
        <li className="collection-item" key={saving._id}>
          <Link to={`/savings/${saving._id}`} >
            <strong>Title: </strong>{saving.savingTitle}
            <br />
            <strong>Amount: $</strong>{saving.savingAmount}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          <ul className="collection">
            {this.renderSavings()}
          </ul>
        </div>
        <div>
          <Link to="/savings/new" className="waves-effect waves-light btn">
            Add
          </Link>
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { savings: state.savings}
}

export default connect(mapStateToProps, { fetchSavings })(SavingList);
