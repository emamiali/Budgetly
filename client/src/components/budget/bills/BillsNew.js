import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBills } from '../../../actions';


class BillsNew extends Component {
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
    this.props.createBills(values, () => {
      this.props.history.push('/dashboard');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
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
    );
  };
}

function validate(values) {

  const errors = {};

  if (!values.title) {
    errors.title = 'Please enter in the title of the bill';
  }
  if (!values.amount) {
    errors.amount = 'Please enter the amount of the bill'
  }

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'BillsNewForm'
})(
  connect(null, { createBills })(BillsNew)
);
