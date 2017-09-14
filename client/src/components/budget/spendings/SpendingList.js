import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSpendings } from '../../../actions';


class SpendingList extends Component {
  componentDidMount() {
    this.props.fetchSpendings();
  }

  renderSpendings() {
    return _.map(this.props.spendings, spending => {
      return (
        <li className="collection-item" key={spending._id}>
          <Link to={`/spendings/${spending._id}`} >
            <strong>Title: </strong>{spending.spendingTitle}
            <br />
            <strong>Amount: $</strong>{spending.spendingAmount}
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
            {this.renderSpendings()}
          </ul>
        </div>
        <div>
          <Link to="/spendings/new" className="waves-effect waves-light btn">
            Add
          </Link>
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { spendings: state.spendings}
}

export default connect(mapStateToProps, { fetchSpendings })(SpendingList);
