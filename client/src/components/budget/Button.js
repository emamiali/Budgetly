import React, { Component } from 'react';
import { connect } from 'react-redux';

class Button extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    this.state = {
      spendingsTitle: '',
      spendingsAmount: ''
    }
    this.submitForm = this.submitForm.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onSpendingsTitleChange = this.onSpendingsTitleChange.bind(this);
    this.onSpendingsAmountChange = this.onSpendingsAmountChange.bind(this);
  }

  submitForm(e) {
    switch (this.props.spendings) {
      case null:
        return <p>Please fill out the form </p>
      case false:
        return <p>Unable to submit the form</p>
      default:
        console.log(this.onFormSubmit());

    }
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.spendings();
  }

  onSpendingsAmountChange(e) {
    this.setState({ spendingsAmount: e.target.value });
  }

  onSpendingsTitleChange(e) {
    this.setState({ spendingsTitle: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <input
            type="text"
            placeholder="Title of the Transaction"
            value = {this.state.spendingsTitle}
            onChange = { this.onSpendingsTitleChange }
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Amount of Transaction"
            value={ this.state.spendingsAmount }
            onChange = { this.onSpendingsAmountChange }
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  };
}

function mapStateToProps(state) {
  return { spendings: state.spendings }
}

export default connect(mapStateToProps)(Button);
