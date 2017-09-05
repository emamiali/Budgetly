import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spendingsTitle: '',
      spendingsAmount: 0
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onSpendingsTitleChange = this.onSpendingsTitleChange.bind(this);
    this.onSpendingsAmountChange = this.onSpendingsAmountChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  onSpendingsAmountChange(e) {
    this.setState({ spendingsAmount: e.target.value });
  }

  onSpendingsTitleChange(e) {
    this.setState({ spendingsTitle: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input
            type="text"
            value = {this.state.spendingsTitle}
            onChange = { this.onSpendingsTitleChange }
          />
        </div>
        <div>
          <input
            type="number"
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

export default Button;
