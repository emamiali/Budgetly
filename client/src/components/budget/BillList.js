import React, { Component } from 'react';
import { connect } from 'react-redux';

class BillList extends Component {
  individualBill(){
    switch (this.props.bills) {
      case null:
        return <p>No Bills</p>
      case false:
        return <p>Something went wrong!!</p>
      default:
        return this.props.bills.map((bill) => {
          return(
            <div key={bill._id}>
              <ul><strong>Title: </strong>{bill.billTitle}</ul>
              <ul><strong>Amount: </strong>{bill.billAmount}</ul>
            </div>
          );
        });
    }
  }

  render() {
    return (
      <div>
        {this.individualBill()}
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { bills: state.bills}
}

export default connect(mapStateToProps)(BillList);
