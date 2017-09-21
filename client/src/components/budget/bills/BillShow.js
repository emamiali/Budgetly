import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBill, deleteBill } from '../../../actions';

class BillShow extends Component {
  componentDidMount() {
    const { bill_id } = this.props.match.params;
    this.props.fetchBill(bill_id);
  }

  onDeleteClick() {
    const { bill_id } = this.props.match.params;
    this.props.deleteBill(bill_id, () => {
      this.props.history.push('/dashboard');
    });
  }

  render() {
    const { bill } = this.props;

    if(!bill) {
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
          Delete Bill</button>
        </div>
        <div className="collection center-align">
          <h3 className="collection-item">Title: { bill.billTitle }</h3>
          <h4 className="collection-item">Amount: {bill.billAmount}</h4>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ bills }, ownProps) {
  return { bill: bills[ownProps.match.params.bill_id]}
}

export default connect(mapStateToProps, { fetchBill, deleteBill })(BillShow);
