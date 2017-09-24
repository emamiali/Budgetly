import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="section"></div>
        <form>
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
