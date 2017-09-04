import React, { Component } from 'react';

const ListOfSpendings = [
  { item: 'Rent', amount: 25, key: 1 },
  { item: 'Gas', amount: 100, key: 2 },
  { item: 'Car Payment', amount: 50, key: 3 },
  { item: 'Insurance', amount: 75, key: 4 },
]


export default class SpendingList extends Component {
  individualItem() {
    return ListOfSpendings.map((spending) => {
      return(
        <div>
          <h6>{spending.item}</h6>
          <p>{spending.amount}</p>
        </div>
      );
    });
  }
  render() {
    return (
        <div>
          {this.individualItem()}
        </div>
    );
  };
}
