import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSavings } from '../../../actions';


class SavingsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;

    const className = `input-field ${ touched && error ? 'invalid' : '' }`

    return (
      <div className="input-field">
        <label className="active"> {field.label} </label>
        <input
          className={className}
          type={field.type}
          {...field.input}
        />
        <div className="text-help">
          { touched ? error : '' }
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createSavings(values, () => {
      this.props.history.push('/dashboard');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <div className="section"></div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Amount"
            name="amount"
            type="number"
            component={this.renderField}
          />
          <div className="row">
            <div className="left-align col s6">
              <button type="submit" className="btn waves-effect waves-light">Submit</button>
            </div>
            <div className="right-align col s6">
              <Link to="/dashboard" className="btn waves-light red">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  };
}

function validate(values) {

  const errors = {};

  if (!values.title) {
    errors.title = 'Please enter in the title of the saving';
  }
  if (!values.amount) {
    errors.amount = 'Please enter the amount of the saving'
  }

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'SavingsNewForm'
})(
  connect(null, { createSavings })(SavingsNew)
);
