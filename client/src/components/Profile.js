import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <p>Please Login first!!</p>
        );
      default:
        return (
          <div>
            <div className="row">
              <div className="col s6">
                Profile Pic here
              </div>
              <div className="col s6">
                <p><strong>Name: </strong>Some name should go here</p>
                <p><strong>Email: </strong></p>
                <p><strong>Savings: </strong></p>
                <p><strong>Total Earning: </strong></p>
                <p><strong>Total Savings: </strong></p>
              </div>
            </div>
            <button className="btn waves-effect">Edit Profile</button>
          </div>
        );
    }
  }
  render() {
    console.log(this.props.auth);
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Profile);
