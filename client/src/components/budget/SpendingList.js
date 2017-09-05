import React, { Component } from 'react';
import { connect } from 'react-redux';

class SpendingList extends Component {
  individualSpending(){
    switch (this.props.spendings) {
      case null:
        return <p>No Spendings</p>
      case false:
        return <p>Something went wrong!!</p>
      default:
        return this.props.spendings.map((spending) => {
          return(
            <div key={spending._id}>
              <ul><strong>Title: </strong>{spending.spendingTitle}</ul>
              <ul><strong>Amount: </strong>{spending.spendingAmount}</ul>
            </div>
          );
        });
    }
  }
  render() {
    return (
        <div>
          {this.individualSpending()}
        </div>
    );
  };
}

function mapStateToProps(state) {
  return { spendings: state.spendings}
}

export default connect(mapStateToProps)(SpendingList);
