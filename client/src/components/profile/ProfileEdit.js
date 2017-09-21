import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { profileEdit } from '../../actions'

class EditProfile extends Component {

  componentDidMount(){
    this.props.auth;
  }

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
    );
  }

  onUpdateProfile(values, callback) {
    const user_id = this.props.auth.data._id;

    this.props.profileEdit(user_id, () => {
      this.props.history.push('/dashboard');
    })
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onUpdateProfile.bind(this))}>
          <Field
            label="Savings Goal For the Month"
            name="totalSavings"
            type="number"
            component={this.renderField}
          />
          <Field
            label= "Total Earnings"
            name= "totalBudget"
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

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default reduxForm({
  form: 'ProfileEditForm'
})(
  connect(mapStateToProps, { profileEdit })(EditProfile)
);
