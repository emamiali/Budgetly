import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NewTotalFunds extends Component {
  renderField(field) {
    return (
      <div>
        <label> {filed.label} </label>
        <input
          className="input-field"
          type={field.type}
          {...field.input}
        />
      </div>
    )
  }

  render() {
    retrun (
      <div>
        <form>
          <Field
            label="Total Income"
            name="income"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Savings Goal"
            name="savingsGoal"
            type="numbner"
            component={this.renderField}
          />
        </form>
      </div>
    );
  };
}

export default reduxForm({
  form: "NewTotalFunds"
})(
  connect(null, null)(NewTotalFunds)
);
