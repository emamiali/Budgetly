import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSpending, deleteSpending } from '../../../actions';

class SpendingShow extends Component {
  componentDidMount() {
    const { spending_id } = this.props.match.params;
    this.props.fetchSpending(spending_id);
  }

  onDeleteClick() {
    const { spending_id } = this.props.match.params;
    this.props.deleteSpending(spending_id, () => {
      this.props.history.push('/dashboard');
    })
  }

  render() {
    const { spending } = this.props;

    if(!spending) {
      return <div>Loading ... </div>
    }

    return (
      <div>
        <Link to="/dashboard">{'<'} Back To Dashboard</Link>
        <div className="right-align">
          <button
            className="btn waves-light red"
            onClick={this.onDeleteClick.bind(this)}
          >
          Delete Spending</button>
        </div>
        <div className="collection center-align">
          <h3 className="collection-item">Title: { spending.spendingTitle }</h3>
          <h4 className="collection-item">Amount: {spending.spendingAmount}</h4>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ spendings }, ownProps) {
  return { spending: spendings[ownProps.match.params.spending_id]}
}

export default connect(mapStateToProps, { fetchSpending, deleteSpending })(SpendingShow);
