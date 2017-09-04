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
            <p><strong>Name: </strong>{this.props.auth.googleID}</p>
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
