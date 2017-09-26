import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSavingsAndIncome } from '../../actions'

class NewTotalFunds extends Component {
  renderField(field) {
    return (
      <div className="input-field">
        <label className="active"> {field.label} </label>
        <input
          className="input-field"
          type={field.type}
          {...field.input}
        />
      </div>
    )
  }

  onSubmit(values){
    this.props.createSavingsAndIncome(values);
    this.props.showNewTotalFundsForm();
    this.props.forceUpdateHandler();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="section"></div>
        <form
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          <Field
            label="Total Income"
            name="income"
            type="number"
            component={this.renderField}
          />
          <Field
            label="Savings Goal"
            name="savingsGoal"
            type="number"
            component={this.renderField}
          />
          <button
            type="submit"
            className="btn waves-effect waves-light"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };
}

export default reduxForm({
  form: "NewTotalFunds"
})(
  connect(null, { createSavingsAndIncome })(NewTotalFunds)
);
